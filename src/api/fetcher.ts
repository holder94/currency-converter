export async function Fetcher(url: string, opts?: RequestInit) {
    try {
        const res = await fetch(url, opts);
        return await res.json();
    } catch (e) {
        console.error(e)
    }
}
