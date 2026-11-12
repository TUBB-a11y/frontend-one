export default function About() {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #0f172a, #1e293b)",
            fontFamily: "Arial, sans-serif"
        }}>

            <div style={{
                textAlign: "center",
                padding: "50px",
                background: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
                maxWidth: "400px",
                width: "85%"
            }}>

                <h1 style={{
                    fontSize: "28px",
                    color: "#0f172a",
                    marginBottom: "10px"
                }}>
                    Welcome!
                </h1>

                <p style={{
                    color: "#64748b",
                    fontSize: "15px",
                    marginBottom: "30px"
                }}>
                    Click the button below to discover something special.
                </p>

                <a
                    href="https://tenor.com/search/rickroll-gifs"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-block",
                        padding: "14px 35px",
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "12px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow: "0 5px 15px rgba(99,102,241,0.4)",
                        transition: "all 0.3s ease"
                    }}
                >
                    Click Me!
                </a>

            </div>
        </div>
    )
}