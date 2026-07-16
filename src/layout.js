export function renderLayout({ title, description, bodyContent, activePath = '/' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22><rect width=%2224%22 height=%2224%22 rx=%226%22 fill=%22%236c63ff%22/><path d=%22M13 3 5 14h6l-1 7 8-11h-6l1-7z%22 fill=%22white%22/></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Rajdhani:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/lucide-static@latest/font/lucide.css">
<link rel="stylesheet" href="/css/style.css">
</head>
<body class="bg-base text-ink font-sans" data-active-path="${activePath}">
${bodyContent}
<script src="/js/main.js" defer></script>
</body>
</html>
`;
}
