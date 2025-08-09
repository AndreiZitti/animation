import { CoreTransforms, Staggered, Timelines, SvgLineDrawing, SvgMorphing } from "./index";

const categories = [CoreTransforms, Staggered, Timelines, SvgLineDrawing, SvgMorphing];

export default function App() {
    // Flatten all demos from all categories with their category info
    const allDemos = categories.flatMap(category =>
        category.demos.map(demo => ({
            ...demo,
            category: category.name,
            categorySlug: category.slug
        }))
    );

    return (
        <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
            <header style={{
                background: "#fff",
                borderBottom: "1px solid #e5e7eb",
                padding: "20px",
                position: "sticky",
                top: 0,
                zIndex: 10
            }}>
                <h1 style={{
                    fontSize: 28,
                    fontWeight: 700,
                    margin: 0,
                    textAlign: "center",
                    color: "#111827"
                }}>
                    Anime.js Animation Library
                </h1>
                <p style={{
                    margin: "8px 0 0 0",
                    textAlign: "center",
                    color: "#6b7280",
                    fontSize: 16
                }}>
                    A comprehensive collection of smooth, interactive animations
                </p>
            </header>

            <main style={{
                padding: "32px 20px",
                maxWidth: "1400px",
                margin: "0 auto"
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: 24
                }}>
                    {allDemos.map(demo => (
                        <demo.Component
                            key={`${demo.categorySlug}-${demo.id}`}
                            auto={true}
                            category={demo.category}
                            categorySlug={demo.categorySlug}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
