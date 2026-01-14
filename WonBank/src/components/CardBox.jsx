import React from 'react'
import InfoRow from './InfoRow';
import { ProductCard } from "woori-product-component";

/**
 * CardBox
 * @param {Object} props
 * @param {string} props.title - 상품명
 * @param {string} props.desc - 상품 설명
 * @param {Array<{label: string, value: string, highlight?: boolean}>} props.rows - 카드에 표시할 항목들
 */
export default function CardBox({ title, desc, rows }) {
    return (
      <section>
        <ProductCard
          title={title}
          description={desc}
          items={rows}
          tone="recommend"
          onClick={() => {}}
        />
      </section>
    );
  }
