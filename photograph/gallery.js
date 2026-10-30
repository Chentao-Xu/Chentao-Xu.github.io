const collection = document.getElementById("collection");
const albums = window.photoAlbums || [];
const requested = new URLSearchParams(location.search).get("album");
const el = (tag, text, cls) => {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (cls) node.className = cls;
  return node;
};
const photo = item => {
  const img = el("img");
  img.src = item.src;
  img.alt = item.alt || item.caption || "";
  img.loading = "lazy";
  img.decoding = "async";
  return img;
};
if (requested) {
  collection.replaceChildren();
  const back = el("a", "← All photographs", "back");
  back.href = "./";
  collection.append(back);
  const album = albums.find(item => item.id === requested);
  if (album) {
    document.title = album.title + " · Chentao Xu";
    collection.append(el("h2", album.title), el("p", [album.year, album.location].filter(Boolean).join(" · "), "muted"));
    if (album.description) collection.append(el("p", album.description));
    const gallery = el("div", "", "gallery");
    for (const item of album.photos) {
      const figure = el("figure");
      figure.append(photo(item));
      if (item.caption) figure.append(el("figcaption", item.caption));
      gallery.append(figure);
    }
    collection.append(gallery);
  } else collection.append(el("p", "This series could not be found.", "empty"));
} else if (albums.length) {
  collection.replaceChildren();
  const years = [...new Set(albums.map(item => item.year))].sort((a,b) => b-a);
  for (const year of years) {
    const section = el("section");
    section.append(el("h2", String(year)));
    const grid = el("div", "", "albums");
    for (const album of albums.filter(item => item.year === year)) {
      const link = el("a", "", "album");
      link.href = "?album=" + encodeURIComponent(album.id);
      const previews = album.photos.slice(0, 3);
      const mosaic = el("div", "", "album-preview");
      mosaic.dataset.count = previews.length;
      for (const item of previews) mosaic.append(photo(item));
      link.append(mosaic);
      link.append(el("h3", album.title));
      link.append(el("p", album.photos.length + " photographs · View series →", "muted"));
      if (album.location) link.append(el("p", album.location, "muted"));
      grid.append(link);
    }
    section.append(grid);
    collection.append(section);
  }
}
