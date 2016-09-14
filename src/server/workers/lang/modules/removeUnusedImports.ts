/**
 * Removes unused imports (both import/require and ES6)
 */
export const removeUnusedImports = (filePath: string, service: ts.LanguageService) => {
    /**
     * Plan:
     * - First finds all the imports in the file
     * - Then checks if they have any usages (using document highlighting).
     * - For used ones it removes them
     *   - If all the ones from a ES6 Named import are unused the whole import is removed
     */
    const imports = getImports(service.getProgram().getSourceFile(filePath));
}


type ImportSearchResult = {}; // TODO type
function getImports(searchNode: ts.SourceFile) {
    const results: ImportSearchResult[] = [];
    ts.forEachChild(searchNode, node => {
        // Vist top-level import nodes
        if (node.kind === ts.SyntaxKind.ImportDeclaration) { // ES6 import
            const importDeclaration = (node as ts.ImportDeclaration);
            const importClause = importDeclaration.importClause;
            const namedBindings = importClause.namedBindings;
            /** Is it a named import */
            if (namedBindings.kind === ts.SyntaxKind.NamedImports) {
                const namedImports = (namedBindings as ts.NamedImports);
                // namedImports.
            }
            /** Or a namespace import */
            else if (namedBindings.kind === ts.SyntaxKind.NamespaceImport) {
                const namespaceImport = (namedBindings as ts.NamespaceImport);
            }
            else {
                console.error('ERRRRRRRRR: found an unaccounted ES6 import type')
            }
        }
        else if (node.kind === ts.SyntaxKind.ImportEqualsDeclaration) { // import =
            // TODO
        }
    });
    return results;
}
