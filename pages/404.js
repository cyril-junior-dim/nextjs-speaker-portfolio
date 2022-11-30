import { Navbar } from "../components";

export default function Custom404() {
    return (
      <div>
          <div>
              <Navbar />
          </div>
          <div style={{
              display: "flex",
              flexDirection: "column",
              height: "80vh"
          }}>
              <h1 style={{
                  textAlign: "center",
                  margin: "auto"
              }}>404 | Page Not Found</h1>
          </div>
      </div>
    )
}