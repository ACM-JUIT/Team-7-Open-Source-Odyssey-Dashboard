export function toast({ title, description, variant }: { title: string; description: string; variant?: string }) {
  alert(`${title}\n\n${description}`);
}
