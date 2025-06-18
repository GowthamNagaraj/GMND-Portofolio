const blogPosts = [
  {
    slug: "first-post",
    title: "My First Blog Post",
    summary: "This is a short intro to my blog post.",
    date: "2025-06-17",
    content: `
## Welcome to My First Post

This is written in **Markdown** and rendered using \`react-markdown\`.

- Dark mode compatible
- SEO ready (soon)
    `,
  },
  {
    slug: "dark-mode-guide",
    title: "How I Built Dark Mode with Tailwind",
    summary: "Step-by-step dark mode setup using Tailwind CSS.",
    date: "2025-06-16",
    content: `
## Tailwind Dark Mode

Use \`dark:\` variants and toggle with a button:

\`\`\`js
const [dark, setDark] = useState(false);
\`\`\`
    `,
  },
];

export default blogPosts;
