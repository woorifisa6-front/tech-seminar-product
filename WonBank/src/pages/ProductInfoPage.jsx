import TopNavigation from "../components/TopNavigation";
import { useNavigate } from 'react-router-dom';

const HEADER_HEIGHT = 56;
const FOOTER_HEIGHT = 88;

const styles = {
  wrapper: {
    width: "390px",
    height: "844px",
    margin: "0 auto",
    backgroundColor: "var(--bg)",
    position: "relative",
    overflow: "hidden",
  },

  /* Header */
  header: {
    position: "fixed",
    top: 0,
    width: "390px",
    height: HEADER_HEIGHT,
    paddingTop: "var(--safe-top)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "var(--bg)",
    zIndex: 10,
  },
  headerTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "var(--text)",
  },
  iconButton: {
    fontSize: "18px",
    cursor: "pointer",
    color: "var(--text)",
  },

  /* Content */
  content: {
    position: "absolute",
    top: HEADER_HEIGHT,
    bottom: FOOTER_HEIGHT,
    width: "100%",
    overflowY: "auto",
    padding: `24px var(--px)`,
    boxSizing: "border-box",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "12px",
    color: "var(--text)",
  },
  desc: {
    fontSize: "14px",
    color: "var(--sub)",
    textAlign: "center",
    lineHeight: "1.6",
    marginBottom: "32px",
  },
  imageArea: {
    height: "200px",
    marginBottom: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
  },

  /* Card */
  card: {
    backgroundColor: "var(--card-bg)",
    borderRadius: "var(--r-card)",
    padding: "20px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },
  rateTitle: {
    fontSize: "14px",
    color: "var(--sub)",
    textAlign: "center",
  },
  rate: {
    fontSize: "20px",
    fontWeight: "700",
    color: "var(--accent)",
    textAlign: "center",
    margin: "8px 0 16px",
  },
  cardDivider: {
    height: "1px",
    backgroundColor: "var(--line)",
    marginBottom: "16px",
  },
  cardRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardLabel: {
    fontSize: "13px",
    color: "var(--sub)",
  },
  cardValue: {
    fontSize: "15px",
    fontWeight: "600",
    marginTop: "4px",
    color: "var(--text)",
  },

  /* Footer */
  footer: {
    position: "fixed",
    bottom: "12px",
    width: "390px",
    padding: `12px 12px var(--safe-bottom)`,
    display: "flex",
    gap: "12px",
    backgroundColor: "var(--bg)",
  },
  leftButton: {
    flex: 1,
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "var(--card-inner)",
    color: "var(--accent)",
    fontSize: "16px",
    fontWeight: "600",
  },
  rightButton: {
    flex: 1,
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "var(--accent)",
    color: "var(--bg)",
    fontSize: "16px",
    fontWeight: "600",
  },
};

const ProductInfoPage = () => {
  const navigator = useNavigate();

  return (
    <>
      <TopNavigation />
      <div className="appRoot" style={styles.wrapper}>
        <header style={styles.header}>
          <button onClick={() => navigator("/")} style={styles.iconButton}>←</button>
          <div style={styles.headerTitle}>안내</div>
          <button style={styles.iconButton}>♡</button>
        </header>

        <main style={styles.content}>
          <h1 style={styles.title}>우리FISA 정기예금</h1>
          <p style={styles.desc}>
            우리FISA 6기를 위한
            <br />
            특별한 정기예금,
            <br />그 찬란한 여정을 금융으로 잇다
          </p>
          <div style={styles.imageArea}>🌟</div>

          <div style={styles.card}>
            <div style={styles.rateTitle}>최고금리</div>
            <div style={styles.rate}>연 3.10% (12개월)</div>

            <div style={styles.cardDivider} />

            <div style={styles.cardRow}>
              <div>
                <div style={styles.cardLabel}>기간</div>
                <div style={styles.cardValue}>12개월</div>
              </div>
              <div>
                <div style={styles.cardLabel}>금액</div>
                <div style={styles.cardValue}>
                  1,000,000원 ~<br />
                  100,000,000원
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer style={styles.footer}>
          <button style={styles.leftButton}>상담</button>
          <button style={styles.rightButton}>상품 가입</button>
        </footer>
      </div>
    </>
  );
};

export default ProductInfoPage;
