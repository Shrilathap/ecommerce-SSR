import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/components/products/Products.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductGalleryProps {
  products: Product[];
}

const options = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const filters = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

const ProductGallery: React.FC<ProductGalleryProps> = ({ products }) => {
    const [selected, setSelected] = useState("RECOMMENDED");
    const [filterShow, setFilterShow] = useState(false);
     const [expanded, setExpanded] = useState<string | null>(null);
  const [customizable, setCustomizable] = useState(false);

    const hanldeFilterDrawer =()=>{
        setFilterShow(!filterShow)
    }

      const toggleSection = (title: string) => {
    setExpanded((prev) => (prev === title ? null : title));
  };
  
  return (
    <>
      <div className={styles.mobileContainer}>
        <button className={styles.mobileFilterButton}>FILTER</button>
        <div className={styles.divider}></div>
        <div className={styles.selectWrapper}>
          <select id="sort" className={styles.selectBox}
          value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.filterbuttonWrap}>
          <h3>{products.length} Items</h3>
          <button type="button" onClick={hanldeFilterDrawer}>
            <Image
              src="images/left-arrow.svg"
              width={100}
              height={100}
              alt="Left arrow"
            />
            {filterShow ? "Hide button" : "Show button"}
          </button>
        </div>
        <div className={styles.selectWrapper}>
          <select
            className={styles.selectBox}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.container}>
        {filterShow && (
          <div className={styles.sidebar}>
            <div className={styles.sideContainer}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={customizable}
                  onChange={() => setCustomizable(!customizable)}
                />
                CUSTOMIZABLE
              </label>

              {filters.map((filter) => (
                <div key={filter} className={styles.section}>
                  <button
                    className={styles.header}
                    onClick={() => toggleSection(filter)}
                  >
                    <span>{filter}</span>
                    <span className={styles.arrow}>
                      {expanded === filter ? (
                        <Image
                          src="images/up-arrow.svg"
                          alt="Up arrow"
                          width={100}
                          height={100}
                        />
                      ) : (
                        <Image
                          src="images/down-arrow.svg"
                          alt="Down arrow"
                          width={100}
                          height={100}
                        />
                      )}
                    </span>
                  </button>
                  {expanded === filter && (
                    <div className={styles.body}>
                      <span>All</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className={styles.productImage}
              />
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.price}>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
