/**
 * Returns the correct image path for public assets or static images.
 * @param {string} src - The image filename or relative path.
 * @param {string} [base='/public'] - Optional base path, defaults to '/public'.
 * @returns {string} - The resolved image path for use in <img> or <Image> components.
 */
export function getImagePath(src: string, base: string = '/public'): string {
    if (!src) return '';
    // Remove leading slash if present
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    // If already an absolute URL, return as is
    if (/^https?:\/\//.test(src)) return src;
    // For Next.js public folder, omit '/public' in final path
    if (base === '/public') {
        return `/${cleanSrc}`;
    }
    return `${base}/${cleanSrc}`;
}
