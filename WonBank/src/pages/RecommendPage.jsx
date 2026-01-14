import '../styles/recommendPage.css';
import '../styles/globals.css';
import TopNavigation from '../components/TopNavigation';
import CardBox from '../components/CardBox';
import Button from '../components/Button';

const MOCK_PRODUCTS = [
  {
    id: 'p1',
    title: '우리FISA 정기예금',
    desc: '우리FISA 6기를 위한 특별한 정기예금, 그 찬란한 여정을 금융으로 잇다.',
    rows: [
      { label: '예상금리', value: '연 2.00% ~ 연 2.80%' },
      { label: '기간', value: '12개월' },
      { label: '금액', value: '5,000만원' },
      { label: '예상이자', value: '최대 140만원', highlight: true },
    ],
  },
  {
    id: 'p2',
    title: '우리 SUPER주거래 정기적금',
    desc: '주거래 고객님께 더 높은 우대금리를!',
    rows: [
      { label: '예상금리', value: '연 2.15% ~ 연 3.55%' },
      { label: '기간', value: '12개월' },
      { label: '금액', value: '월 50만원' },
      { label: '예상이자', value: '최대 11만 5,836원', highlight: true },
    ],
    eligible: true
  },
];

export default function RecommendPage() {
  const userName = 'WIBEE';

  const onBack = () => alert('뒤로가기');
  const onCancel = () => alert('취소');
  const onRetry = () => alert('다시추천');

  return (
    <div className="recommendPage">
      <TopNavigation title="나만의 예적금 찾기" onBack={onBack} rightText="취소" onRight={onCancel} />

      <main className="depositPage__content">
        <h1 className="depositPage__headline">
          {userName}님에게
          <br />
          적합한 예적금 상품이에요
        </h1>

        <section className="depositPage__list">
          {MOCK_PRODUCTS.map((p) => (
            <CardBox key={p.id} title={p.title} desc={p.desc} rows={p.rows} eligible={p.eligible} />
          ))}
        </section>
      </main>

      <div className="depositPage__ctaFixed">
        <Button variant="ghost" size="lg" fullWidth onClick={onRetry}>
            다시추천
        </Button>
      </div>

    </div>
  );
}