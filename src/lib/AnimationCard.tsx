import React from "react";

export const cardStyles: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    background: "#fff",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
};

export const previewStyles: React.CSSProperties = {
    borderRadius: 12,
    background: "#f8fafc",
    minHeight: 120,
    display: "grid",
    placeItems: "center",
    position: "relative",
    overflow: "hidden",
};

// Category tag colors
const categoryColors: Record<string, { bg: string; text: string }> = {
    "core-transforms": { bg: "#dbeafe", text: "#1e40af" },
    "staggered": { bg: "#dcfce7", text: "#166534" },
    "timelines": { bg: "#fef3c7", text: "#92400e" },
    "svg-line-drawing": { bg: "#e0e7ff", text: "#5b21b6" },
    "svg-morphing": { bg: "#fce7f3", text: "#be185d" },
};

export const AnimationCard: React.FC<{
    title: string;
    description?: string;
    category?: string;
    categorySlug?: string;
    children: React.ReactNode;
}> = ({ title, description, category, categorySlug, children }) => {
    const tagColors = categorySlug ? categoryColors[categorySlug] || { bg: "#f3f4f6", text: "#374151" } : { bg: "#f3f4f6", text: "#374151" };

    return (
        <div style={cardStyles}>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ fontWeight: 600, fontSize: 16 }}>{title}</div>
                    {category && (
                        <span style={{
                            fontSize: 11,
                            fontWeight: 600,
                            padding: "4px 8px",
                            borderRadius: 12,
                            background: tagColors.bg,
                            color: tagColors.text,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            flexShrink: 0,
                            marginLeft: 8
                        }}>
                            {category.replace(" & ", " ")}
                        </span>
                    )}
                </div>
                {description && (
                    <div style={{ color: "#64748b", fontSize: 14, lineHeight: 1.4 }}>{description}</div>
                )}
            </div>
            <div style={previewStyles}>{children}</div>
        </div>
    );
};
