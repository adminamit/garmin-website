import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/_css/footer.css";
import { ItemWrapper } from "./ItemWrapper";
const Footer = () => {
  return (
    <footer className="gf__footer en-GB">
      <nav className="gf__nav">
        <ul id="js__gf__menu" className="gf__list en-GB">
          <ItemWrapper>
            <button
              className="gf__list__item__link en-GB js__gf__list__item__link"
              data-gatext="Customer Service"
            >
              <span className="gf__list__item__link__text en-GB">
                Customer Service
              </span>
              <svg
                className="gf__list__item__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 25.5"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  d="M25.1 9.5l-8 8-8-8"
                />
              </svg>
            </button>
            <div className="gf__list__wrapper en-GB js__gf__list__wrapper">
              <ul className="gf__list">
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="https://support.garmin.com/en-GB/">
                      Support Centre
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="/contact">Contact Us</Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="https://www.delhivery.com/tracking">
                      Order Status
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="/consumer-limited-warranty/">
                      Warranty Information
                    </Link>
                  </span>
                </li>

                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="/bulk-enquiry">Bulk Enquiry</Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="/sales-promotions">Deals and Promotions</Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  {/* <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="/consumer-limited-warranty">
                      Warranty Information
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                > */}
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="/shipping">Shipping Policy</Link>
                  </span>
                </li>
              </ul>
            </div>
          </ItemWrapper>
          <ItemWrapper>
            <button
              className="gf__list__item__link en-GB js__gf__list__item__link"
              data-gatext="Company"
            >
              <span className="gf__list__item__link__text en-GB">Company</span>
              <svg
                className="gf__list__item__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 25.5"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  d="M25.1 9.5l-8 8-8-8"
                />
              </svg>
            </button>
            <div className="gf__list__wrapper en-GB js__gf__list__wrapper">
              <ul className="gf__list">
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="/about-garmin" className="">
                      About Us
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <a
                      href="/blog/"
                      className="gf__list__item__link en-GB"
                      data-gatext="Blog"
                      data-ua-event="Global Footer, Nav, Blog"
                    >
                      Blog
                    </a>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="/faq" className="">
                      FAQ{"'"}s
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="/blog/category/press-release/" className="">
                      Newsroom
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link
                      href="https://www.garmin.com/en-IN/sustainability/overview/"
                      className=""
                    >
                      Sustainability
                    </Link>
                  </span>
                </li>
                {/* <li
                                    className="gf__list__item en-GB js__gf__list__item"
                                    aria-hidden="false"
                                >
                                    <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                                        <Link href="/career" className="">
                                            Jobs
                                        </Link>
                                    </span>
                                </li> */}
              </ul>
            </div>
          </ItemWrapper>
          <ItemWrapper>
            <button
              className="gf__list__item__link en-GB js__gf__list__item__link"
              data-gatext="Platforms"
            >
              <span className="gf__list__item__link__text en-GB">
                Platforms
              </span>
              <svg
                className="gf__list__item__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 25.5"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  d="M25.1 9.5l-8 8-8-8"
                />
              </svg>
            </button>
            <div className="gf__list__wrapper en-GB js__gf__list__wrapper">
              <ul className="gf__list">
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="https://connect.garmin.com/" className="">
                      Garmin Connect
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link
                      href="https://www.garmin.com/en-GB/software/express/windows/"
                      className=""
                    >
                      Garmin Express
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link href="https://apps.garmin.com/en-GB/" className="">
                      Connect IQ
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link
                      href="https://fly.garmin.com/fly-garmin/"
                      className=""
                    >
                      flyGarmin
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link
                      href="https://explore.garmin.com/en-IN/Account/LogOn?ReturnUrl=%2fen-GB%2f"
                      className=""
                    >
                      Garmin Explore
                    </Link>
                  </span>
                </li>
                <li
                  className="gf__list__item en-GB js__gf__list__item"
                  aria-hidden="false"
                >
                  <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                    <Link
                      href="https://www.garmin.com/en-GB/health/"
                      className=""
                    >
                      Garmin Health: Enterprise Health Solutions
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </ItemWrapper>
          <ItemWrapper>
            {/* <button
                            className="gf__list__item__link en-GB js__gf__list__item__link"
                            data-gatext="For business"
                        >
                            <span className="gf__list__item__link__text en-GB">
                                For business
                            </span>
                            <svg
                                className="gf__list__item__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 25.5"
                            >
                                <path
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={10}
                                    d="M25.1 9.5l-8 8-8-8"
                                />
                            </svg>
                        </button>
                        <div className="gf__list__wrapper en-GB js__gf__list__wrapper">
                            <ul className="gf__list">
                                <li
                                    className="gf__list__item en-GB js__gf__list__item"
                                    aria-hidden="false"
                                >
                                    <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                                        <Link
                                            href="https://dealers.garmin.com/en-IN/partner-portal/welcome/"
                                            className=""
                                        >
                                            Dealer Resource Center
                                        </Link>
                                    </span>
                                </li>
                                <li
                                    className="gf__list__item en-GB js__gf__list__item"
                                    aria-hidden="false"
                                >
                                    <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                                        <Link
                                            href="https://developer.garmin.com/"
                                            className=""
                                        >
                                            Developers
                                        </Link>
                                    </span>
                                </li>
                                <li
                                    className="gf__list__itexm en-GB js__gf__list__item"
                                    aria-hidden="false"
                                >
                                    <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                                        <Link
                                            href="https://discover.garmin.com/en-GB/aoem/"
                                            className=""
                                        >
                                            Automotive OEM
                                        </Link>
                                    </span>
                                </li>
                                <li
                                    className="gf__list__item en-GB js__gf__list__item"
                                    aria-hidden="false"
                                >
                                    <span className="js__gf__list__item__link en-GB gf__list__item__link__wrapper">
                                        <Link
                                            href="https://discover.garmin.com/en-GB/who-we-work-with/"
                                            className=""
                                        >
                                            Who We Work With
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                        </div> */}
          </ItemWrapper>
        </ul>
      </nav>
      <div className="gf__image gf__image--screen-lg">
        <ul className="gf__image__list" />
      </div>
      <div className="gf__company">
        <div className="gf__locale">
          <Image
            alt="default alt"
            src="https://cmsprod.garmin-india.com/media/Amit-Logo-white.svg"
            width="120"
            height="120"
          />
        </div>

        <div className="gf__social">
          <ul className="gf__social__list">
            <li className="gf__social__list__item">
              <a
                href="https://www.facebook.com/GarminIN"
                data-ua-event="Footer Social Links,Click,Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <title>Facebook</title>
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </a>
            </li>
            <li className="gf__social__list__item">
              <a
                href="https://www.youtube.com/@Garmin_IN"
                data-ua-event="Footer Social Links,Click,Youtube"
              >
                <svg viewBox="0 0 24 24">
                  <title>YouTube</title>
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            </li>
            <li className="gf__social__list__item">
              <a
                href="https://www.linkedin.com/company/garminindia/"
                data-ua-event="Footer Social Links,Click,Pinterest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </a>
            </li>
            <li className="gf__social__list__item">
              <a
                href="https://www.instagram.com/garminindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                data-ua-event="Footer Social Links,Click,Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style
        nonce
        dangerouslySetInnerHTML={{
          __html:
            'sup{font-size:max(.5rem,.4em);line-height:1;position:relative;top:0;vertical-align:super}h1 sup,h2 sup,h3 sup,h4 sup,h5 sup,h6 sup{font-size:max(.6875rem,.4em)}h1 sup{top:-.35rem}h2 sup{top:-.3rem}h3 sup{top:-.1rem}h5 sup,h6 sup{top:.1rem}.gf__legal{font-family:Roboto,"Noto Sans TC","Noto Sans SC","Noto Sans JP","Noto Sans KR",Prompt,sans-serif;flex:1 1 100%;background:#000;color:#fff;padding:0;display:flex;justify-content:space-between;flex-wrap:wrap;padding:0 1rem 1rem 1rem;flex-direction:column-reverse}@media screen and (min-width:1200px){.gf__legal{flex-direction:row;padding:0 1.5rem}}.gf__legal p{font-size:.8rem;text-align:center;color:#fff;font-weight:500}@media screen and (min-width:1200px){.gf__legal p{text-align:left}}.gf__legal__only p{margin:.5rem 0 0 0}.gf__legal__only .gfl__list{margin:.5rem 0 0 0}.gf__legal__container__copyright{margin-bottom:.5em}.gf__legal__container__china{align-items:start;display:flex}.gf__legal__container__china img{padding-right:3px}.gf__legal__container .legal-copy{color:inherit;text-decoration:none}.gf__legal__container .legal-copy a{color:inherit;text-decoration:none}.gf__legal__container .legal-copy p{margin-top:0}.gfl__list{font-family:Roboto,"Noto Sans TC","Noto Sans SC","Noto Sans JP","Noto Sans KR",Prompt,sans-serif;font-size:.8rem;margin:1rem 0;text-align:center;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:0}.gfl__list.zh-CN{align-items:baseline}.gfl__list__item{list-style:none;margin:0 1rem 1rem 1rem;font-weight:500}@media screen and (min-width:1200px){.gfl__list__item{margin:0 1rem}}.gfl__list__item__link:active,.gfl__list__item__link:focus,.gfl__list__item__link:hover,.gfl__list__item__link:link,.gfl__list__item__link:visited{color:#fff;text-decoration:none}.gfl__list__item__link:focus,.gfl__list__item__link:hover{text-decoration:underline}.gfl__list__item:last-child{margin-right:0}.gfl__locale__link{font-family:Roboto,"Noto Sans TC","Noto Sans SC","Noto Sans JP","Noto Sans KR",Prompt,sans-serif;font-size:.8rem;margin:.5rem 0;width:100%;text-align:center}@media screen and (min-width:1200px){.gfl__locale__link{text-align:left}}.gfl__locale__link:active,.gfl__locale__link:focus,.gfl__locale__link:hover,.gfl__locale__link:link,.gfl__locale__link:visited{color:#fff;text-decoration:none}',
        }}
      />
      <div className="gf__legal en-GB">
        <div className="gf__legal__container">
          <p className="gf__legal__container__copyright">
            Copyright © AMIT International Group FZE
          </p>
        </div>
        <ul className="gfl__list en-GB">
          <li
            className="gfl__list__item js__gfl__list__item"
            aria-hidden="false"
          >
            <span className="js__gfl__list__item__link gfl__list__item__link__wrapper">
              <Link href="#" className="footer-menu-list-item">
                Site Map
              </Link>{" "}
            </span>
          </li>
          <li
            className="gfl__list__item js__gfl__list__item"
            aria-hidden="false"
          >
            <span className="js__gfl__list__item__link gfl__list__item__link__wrapper">
              <Link href="terms" className="footer-menu-list-item">
                Terms of Use
              </Link>
            </span>
          </li>
          <li
            className="gfl__list__item js__gfl__list__item"
            aria-hidden="false"
          >
            <span className="js__gfl__list__item__link gfl__list__item__link__wrapper">
              <Link href="/privacy" className="footer-menu-list-item">
                Privacy
              </Link>
            </span>
          </li>
          <li
            className="gfl__list__item js__gfl__list__item"
            aria-hidden="false"
          >
            <span className="js__gfl__list__item__link gfl__list__item__link__wrapper">
              <Link
                href="https://support.garmin.com/en-GB/"
                className="footer-menu-list-item"
              >
                Compliance
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
