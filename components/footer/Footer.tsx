import styles from '@/components/footer/Footer.module.css';
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.newsletter_wrapper}>
                    <div className={styles.newsletter}>
                    <h4>BE THE FIRST TO KNOW</h4>
                    <p>Sign up for updates from mettā muse.</p>
                    <form className={styles.subscribe_form}>
                        <input type="email" placeholder="Enter your e-mail..." />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                    </div>

                    <div className={styles.contact_col}>
                        <h5>CONTACT US</h5>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>

                        <h5>CURRENCY</h5>
                        <p>🇺🇸 USD</p>
                        <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
                    </div>
                </div>

                <div className={styles.footer_info}>
                    <div className={styles.footer_col}>
                        <h5>mettā muse</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                        </ul>
                    </div>

                    <div className={styles.footer_col}>
                        <h5>QUICK LINKS</h5>
                        <ul>
                            <li>Orders & Shipping</li>
                            <li>Join/Login as a Seller</li>
                            <li>Payment & Pricing</li>
                            <li>Return & Refunds</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className={`${styles.footer_col} ${styles.social_col}`}>
                        <h5>FOLLOW US</h5>
                        <div className={styles.icons}>
                            <Image src="/images/instagram-icon.svg" alt='Instagram' width={100} height={100}/>
                            <Image src="/images/linkedin-icon.svg" alt='Linkedin' width={100} height={100}/>
                        </div>

                        <h5>mettā muse ACCEPTS</h5>
                        <div className={styles.payments}>
                            <Image src="/images/googlepay.svg" alt="Google Pay" width={100} height={100}/>
                            <Image src="/images/mastercard.svg" alt="Mastercard" width={100} height={100}/>
                            <Image src="/images/paypal.svg" alt="PayPal" width={100} height={100}/>
                            <Image src="/images/amex.svg" alt="Amex" width={100} height={100}/>
                            <Image src="/images/applepay.svg" alt="Apple Pay" width={100} height={100}/>
                            <Image src="/images/shopify.svg" alt="Shopify Pay" width={100} height={100}/>
                        </div>
                    </div>
                </div>

                <div className={styles.footer_bottom}>
                    <p>&copy; 2023 mettamuse. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}