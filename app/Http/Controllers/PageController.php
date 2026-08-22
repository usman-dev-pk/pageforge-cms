<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class PageController extends Controller
{
    public function builder(Request $request, ?Page $page = null): View
    {
        if ($page) {
            $this->authorizePage($request, $page);
        }

        return view('page-builder', [
            'page' => $page,
            'pages' => Page::query()
                ->where('user_id', $request->user()->id)
                ->when($page, fn ($query) => $query->where('id', '!=', $page->id))
                ->orderBy('title')
                ->get(['id', 'parent_id', 'title', 'slug']),
        ]);
    }

    public function index(Request $request): JsonResponse
    {
        $pages = Page::query()
            ->where('user_id', $request->user()->id)
            ->orderBy('title')
            ->get(['id', 'parent_id', 'title', 'slug']);

        return response()->json(['pages' => $pages]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $this->validatePage($request);

        $page = $request->user()->pages()->create($validated);

        return response()->json(['page' => $page], 201);
    }

    public function show(Request $request, Page $page): JsonResponse
    {
        $this->authorizePage($request, $page);

        return response()->json(['page' => $page]);
    }

    public function update(Request $request, Page $page): JsonResponse
    {
        $this->authorizePage($request, $page);
        $validated = $this->validatePage($request, $page);

        $page->update($validated);

        return response()->json(['page' => $page->fresh()]);
    }

    public function children(Request $request, Page $page): JsonResponse
    {
        $this->authorizePage($request, $page);

        return response()->json([
            'pages' => $page->children()->orderBy('title')->get(['id', 'parent_id', 'title', 'slug']),
        ]);
    }

    private function validatePage(Request $request, ?Page $page = null): array
    {
        $userId = $request->user()->id;
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
                Rule::unique('pages', 'slug')
                    ->where(fn ($query) => $query->where('user_id', $userId))
                    ->ignore($page?->id),
            ],
            'parent_id' => [
                'nullable',
                'integer',
                Rule::exists('pages', 'id')->where(fn ($query) => $query->where('user_id', $userId)),
            ],
            'builder_data' => ['required', 'array'],
        ]);

        if ($page && isset($validated['parent_id']) && (int) $validated['parent_id'] === $page->id) {
            abort(422, 'A page cannot be its own parent.');
        }

        if ($page && !empty($validated['parent_id']) && $this->isDescendant($page, (int) $validated['parent_id'])) {
            abort(422, 'A page cannot be assigned below one of its descendants.');
        }

        return $validated;
    }

    private function authorizePage(Request $request, Page $page): void
    {
        abort_unless($page->user_id === $request->user()->id, 404);
    }

    private function isDescendant(Page $page, int $candidateParentId): bool
    {
        $current = Page::find($candidateParentId);

        while ($current) {
            if ($current->parent_id === $page->id) {
                return true;
            }

            $current = $current->parent;
        }

        return false;
    }
}
