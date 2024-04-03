export function generateSlug(text: string): string {
    return text
        .normalize("NFD")
        .replace(/[\u{0300}-\u{036f}]/gu, "")
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
};