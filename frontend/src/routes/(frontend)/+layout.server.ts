import type { MenuItem } from "$lib/types/navigation";

export async function load() {
  //const res = await fetch('/api/navigation');
  //const items: MenuItem[] = await res.json();
    const items: MenuItem[] = [
        { label: 'Home', href: '/' },
        { label: 'Shop', sectionId: 'featured-products' },
        { label: 'About', sectionId: 'about-1' },
        { label: 'Contact', href: '#' }
    ];
  return { menuItems: items };

}