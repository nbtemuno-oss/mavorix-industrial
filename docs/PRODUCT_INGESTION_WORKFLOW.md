# Product Ingestion Workflow

Product photos in `product inbox` are treated as user-approved final public images.

## Image Review

1. The user reviews each original product image.
2. The user manually removes any information they do not want public.
3. The user places the final approved images in `product inbox`.
4. Codex only handles orientation correction, conservative cropping, resizing, SEO-friendly filenames, WebP conversion, and compression.
5. Codex does not automatically blur, mask, mosaic, cover, remove logos, remove labels, remove barcodes, remove serial numbers, or edit visible product content.

If Codex notices potentially sensitive information, it should report a warning for manual review instead of modifying the image.
