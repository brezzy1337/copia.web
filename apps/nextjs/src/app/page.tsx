import { RevealOnScroll } from "./_components/landing/reveal-on-scroll";
import { WaitlistForm } from "./_components/landing/waitlist-form";

export default function HomePage() {
  return (
    <>
      <RevealOnScroll />

      <div className="wrap">
        <nav>
          <div className="brand">
            <span className="dot"></span>Copia
          </div>
          <div className="spacer"></div>
          <div className="links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#nutrition">Nutrition</a>
            <a className="btn btn-mint" href="#waitlist">
              Join the waitlist
            </a>
          </div>
        </nav>
      </div>

      <header className="hero">
        <div className="hero-blobs">
          <span className="blob b1"></span>
          <span className="blob b2"></span>
          <span className="blob b3"></span>
        </div>
        <div className="wrap hero-grid">
          <div className="copy">
            <div className="eyebrow rise d1">Eat well · On your budget</div>
            <h1 className="rise d2">
              Healthy groceries that <span className="u">fit your budget</span>.
            </h1>
            <p className="sub rise d3">
              Tell us your budget and how you eat. Copia plans a full, balanced
              week of groceries that fits — then shows you what to cook with
              exactly what you bought.
            </p>
            <div className="cta-row rise d4">
              <a className="btn btn-mint btn-lg" href="#waitlist">
                Join the waitlist
              </a>
              <a className="btn btn-ghost btn-lg" href="#how">
                See how it works →
              </a>
            </div>
            <div className="trust rise d5">
              Coming soon to iOS &amp; Android <span className="d"></span> You
              check out on Instacart
            </div>
          </div>

          <div className="stage">
            <div className="fchip c1 float">
              <span className="ico">↓</span>
              <div>
                $112 under budget<small>est. for this plan</small>
              </div>
            </div>
            <div className="fchip c2 float f2">
              <span className="ico">✿</span>
              <div>
                Balanced week<small>nutrition at a glance</small>
              </div>
            </div>
            <div className="fchip c3 float f3">
              <span className="ico">⏱</span>
              <div>
                Budget-first<small>set it, get a plan</small>
              </div>
            </div>
            <div className="phone">
              <div className="screen">
                <div className="notch"></div>
                <div className="s-head">
                  <span className="s-chip">5 / 6</span>
                  <span className="s-title">Your AI plan</span>
                </div>
                <div className="bud-top">
                  <span className="bud-k">Budget used (est.)</span>
                  <span className="bud-a">$288 / $400</span>
                </div>
                <div className="bud-track">
                  <div className="bud-fill"></div>
                </div>
                <div className="tiles">
                  <div className="tile">
                    <div className="l">Daily calories</div>
                    <div className="v">2,050</div>
                  </div>
                  <div className="tile">
                    <div className="l">Protein / day</div>
                    <div className="v">128 g</div>
                  </div>
                  <div className="tile">
                    <div className="l">Household</div>
                    <div className="v pos">4</div>
                  </div>
                  <div className="tile">
                    <div className="l">Items</div>
                    <div className="v">28</div>
                  </div>
                </div>
                <div className="s-lab">In your cart</div>
                <div className="irow">
                  <span className="ic"></span>
                  <div>
                    <div className="n">
                      Chicken breast <span className="otag">Protein</span>
                    </div>
                    <div className="m">2 lb · $14.99 est.</div>
                  </div>
                </div>
                <div className="irow">
                  <span className="ic"></span>
                  <div>
                    <div className="n">
                      Baby spinach <span className="otag">Produce</span>
                    </div>
                    <div className="m">16 oz · $4.99 est.</div>
                  </div>
                </div>
                <div className="s-btn">Review cart</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem / promise */}
      <section className="section problem">
        <div className="wrap">
          <div className="section-lead reveal">
            <div className="eyebrow">The problem</div>
            <h2>Groceries are expensive — and half of it gets thrown out.</h2>
            <p>
              Copia plans your week to your budget and helps you use all of it.
              Stay on budget, waste nothing.
            </p>
          </div>
          <div className="prob-grid">
            <div className="prob-card bad reveal">
              <div className="tag">Without a plan</div>
              <h3>You overspend, then watch food spoil.</h3>
              <p>
                You shop without a number, costs creep up at checkout, and
                produce you bought with good intentions ends up in the bin by
                Friday.
              </p>
            </div>
            <div className="prob-card good reveal">
              <div className="tag">With Copia</div>
              <h3>A week that fits — and gets fully used.</h3>
              <p>
                Start with what you can spend. Copia builds a balanced cart that
                fits, then turns it into recipes so every item has a purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="how section"
        id="how"
        style={{ background: "var(--cream)" }}
      >
        <div className="wrap">
          <div className="lead reveal">
            <div className="eyebrow">How it works</div>
            <h2>Three steps, nothing wasted.</h2>
          </div>
          <div className="steps">
            <div className="step s1 reveal">
              <div className="n">1</div>
              <h3>Tell us your budget &amp; diet</h3>
              <p>
                Your weekly budget, household size, and how you eat — allergies,
                preferences, foods to avoid. That&apos;s the whole setup.
              </p>
            </div>
            <div className="step s2 reveal">
              <div className="n">2</div>
              <h3>Get your week&apos;s plan + nutrition</h3>
              <p>
                Copia builds a complete, balanced week of groceries that fits
                your budget, with a nutrition breakdown you can see at a glance.
              </p>
            </div>
            <div className="step s3 reveal">
              <div className="n">3</div>
              <h3>Shop it, then cook through it</h3>
              <p>
                Send your plan to Instacart in one tap, then cook recipes built
                from exactly what you bought. Prices confirm at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="section features" id="features">
        <div className="wrap">
          <div className="section-lead reveal">
            <div className="eyebrow">What you get</div>
            <h2>Everything to plan, shop, and cook your week.</h2>
            <p>
              Built for real households — budget-first, balanced, and simple by
              design.
            </p>
          </div>
          <div className="fgrid">
            <div className="fcard reveal">
              <div className="fico fi-clay">◎</div>
              <h3>Set your budget, not your menu</h3>
              <p>
                Tell Copia your weekly budget, household size, and diet. No
                recipe browsing, no calorie diary — that&apos;s the whole setup.
              </p>
            </div>
            <div className="fcard reveal">
              <div className="fico fi-gold">✦</div>
              <h3>An AI plan that fits your budget</h3>
              <p>
                Copia generates a complete week of groceries optimized to your
                budget — real, balanced food, not filler.
              </p>
              <span className="est">
                Prices are smart estimates you confirm at checkout.
              </span>
            </div>
            <div className="fcard reveal">
              <div className="fico fi-pos">☰</div>
              <h3>A shopping list that makes sense</h3>
              <p>
                Every item grouped by aisle — Produce, Protein, Dairy, Pantry
                and more — with a running budget bar so you always know where
                you stand.
              </p>
            </div>
            <div className="fcard reveal">
              <div className="fico fi-pos">▤</div>
              <h3>Nutrition you can actually see</h3>
              <p>
                A full label-style breakdown for your week: calories &amp;
                protein, vitamins, minerals, and limit-nutrients as
                target-vs-actual bars.
              </p>
              <span className="est">
                AI-estimated — nutrition at a glance, not lab-grade.
              </span>
            </div>
            <div className="fcard signature reveal">
              <div className="fico fi-mint">♨</div>
              <h3>
                Cook from your cart <span className="star">SIGNATURE</span>
              </h3>
              <p>
                Copia writes recipes built from the groceries you already bought
                — each ingredient tagged “in your cart” or “you&apos;ll need,”
                with simple steps.
              </p>
            </div>
            <div className="fcard reveal">
              <div className="fico fi-gold">⚡</div>
              <h3>Shop in one tap</h3>
              <p>
                Send your plan — or a recipe&apos;s missing ingredients —
                straight to Instacart to check out. You pick your store there.
              </p>
            </div>
            <div className="fcard reveal">
              <div className="fico fi-clay">↻</div>
              <h3>Yours to adjust</h3>
              <p>
                Don&apos;t love a plan? Regenerate it. Remove items you
                don&apos;t want. Simple by design, always in your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight: Cook from your cart */}
      <section className="section cook">
        <span className="blob ck1"></span>
        <span className="blob ck2"></span>
        <div className="wrap cook-grid">
          <div className="reveal">
            <div className="eyebrow">Signature feature</div>
            <h2>
              You bought it. Now <span className="u-mint">cook all of it</span>.
            </h2>
            <p className="lead-p">
              Most apps hand you a shopping list and leave you guessing. Copia
              does the opposite — it writes recipes from the groceries already in
              your cart, so every item gets used.
            </p>
            <ul className="benefits">
              <li>
                <span className="ck">✓</span>
                <span>
                  Each ingredient tagged <strong>“in your cart”</strong> vs{" "}
                  <strong>“you&apos;ll need”</strong> — no surprises.
                </span>
              </li>
              <li>
                <span className="ck">✓</span>
                <span>
                  Simple, step-by-step recipes that stretch every item across the
                  week.
                </span>
              </li>
              <li>
                <span className="ck">✓</span>
                <span>
                  Missing something? Send just those few ingredients to Instacart
                  in one tap.
                </span>
              </li>
            </ul>
          </div>
          <div className="reveal">
            <div className="recipe">
              <div className="r-top">
                <span className="r-chip">From your cart</span>
                <span className="r-chip">25 min</span>
              </div>
              <h4>Garlic chicken &amp; spinach skillet</h4>
              <div className="r-meta">Serves 4 · uses 5 items you already bought</div>
              <div className="r-lab">Ingredients</div>
              <div className="ing">
                <span className="nm">Chicken breast · 2 lb</span>
                <span className="t t-have">In your cart</span>
              </div>
              <div className="ing">
                <span className="nm">Baby spinach · 16 oz</span>
                <span className="t t-have">In your cart</span>
              </div>
              <div className="ing">
                <span className="nm">Brown rice · 1 cup</span>
                <span className="t t-have">In your cart</span>
              </div>
              <div className="ing">
                <span className="nm">Garlic · 3 cloves</span>
                <span className="t t-have">In your cart</span>
              </div>
              <div className="ing">
                <span className="nm">Lemon · 1</span>
                <span className="t t-need">You&apos;ll need</span>
              </div>
              <div className="steps-mini">
                <div className="sm">
                  <b>1.</b>
                  <span>Sear seasoned chicken, then rest and slice.</span>
                </div>
                <div className="sm">
                  <b>2.</b>
                  <span>Wilt spinach with garlic; finish with a squeeze of lemon.</span>
                </div>
                <div className="sm">
                  <b>3.</b>
                  <span>Serve over brown rice. Save leftovers for tomorrow&apos;s lunch.</span>
                </div>
              </div>
              <div className="r-cta">Add missing item to Instacart →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition spotlight */}
      <section
        className="section"
        id="nutrition"
        style={{ background: "var(--cream)" }}
      >
        <div className="wrap nutri-grid">
          <div className="nutri-copy reveal">
            <div className="eyebrow">Nutrition</div>
            <h2>Know what&apos;s in your week — at a glance.</h2>
            <p>
              A full nutrition-label breakdown for your plan: calories and
              protein up top, plus vitamins, minerals, and limit-nutrients shown
              as target-vs-actual bars.
            </p>
            <div className="heads">
              <span className="ico">↘</span>
              <span>
                And a gentle heads-up when something runs low — like fiber this
                week — so you can top it up.
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "var(--c3)",
                marginTop: "18px",
                maxWidth: "44ch",
              }}
            >
              AI-estimated and meant for everyday guidance — not medical or
              clinical advice.
            </p>
          </div>
          <div className="reveal">
            <div className="label">
              <div className="lt">Your week, nutrition</div>
              <div className="lsub">
                Estimated · whole-household plan · per day average
              </div>
              <div className="big">
                <div>
                  <div className="bk">Calories / day</div>
                  <div className="bv">2,050</div>
                </div>
                <div>
                  <div className="bk">Protein / day</div>
                  <div className="bv">128 g</div>
                </div>
              </div>
              <div className="nrow">
                <div className="nh">
                  <span className="nk">Fiber</span>
                  <span className="nv">22 g · 78% of target</span>
                </div>
                <div className="ntrack">
                  <div className="nfill low" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div className="nrow">
                <div className="nh">
                  <span className="nk">Iron</span>
                  <span className="nv">15 mg · 94% of target</span>
                </div>
                <div className="ntrack">
                  <div className="nfill ok" style={{ width: "94%" }}></div>
                </div>
              </div>
              <div className="nrow">
                <div className="nh">
                  <span className="nk">Vitamin C</span>
                  <span className="nv">110% of target</span>
                </div>
                <div className="ntrack">
                  <div className="nfill ok" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="nrow">
                <div className="nh">
                  <span className="nk">Calcium</span>
                  <span className="nv">88% of target</span>
                </div>
                <div className="ntrack">
                  <div className="nfill ok" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div className="limits-lab">Keep an eye on</div>
              <div className="nrow">
                <div className="nh">
                  <span className="nk">Sodium</span>
                  <span className="nv">72% of limit</span>
                </div>
                <div className="ntrack">
                  <div className="nfill limit" style={{ width: "72%" }}></div>
                </div>
              </div>
              <div className="nrow">
                <div className="nh">
                  <span className="nk">Added sugar</span>
                  <span className="nv">45% of limit</span>
                </div>
                <div className="ntrack">
                  <div className="nfill limit" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div className="nrow">
                <div className="nh">
                  <span className="nk">Saturated fat</span>
                  <span className="nv">60% of limit</span>
                </div>
                <div className="ntrack">
                  <div className="nfill limit" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Copia is different */}
      <section className="section diff">
        <div className="wrap">
          <div className="section-lead reveal">
            <div className="eyebrow">Why Copia is different</div>
            <h2>Recipe apps start with a recipe. Copia starts with your budget.</h2>
            <p>
              Every other meal app is recipe-first — you find out the cost later.
              Copia is budget-first, so the plan fits before you ever check out.
            </p>
          </div>
          <div className="diff-grid">
            <div className="diff-card them reveal">
              <div className="dh">Recipe-first apps</div>
              <h3>Pick meals you like, hope it adds up.</h3>
              <ul>
                <li>
                  <span className="mk">✕</span>
                  <span>
                    You browse recipes first, then a shopping list is built
                    around them.
                  </span>
                </li>
                <li>
                  <span className="mk">✕</span>
                  <span>
                    The total cost only shows up at checkout — often over budget.
                  </span>
                </li>
                <li>
                  <span className="mk">✕</span>
                  <span>Leftover odds and ends get forgotten and thrown away.</span>
                </li>
                <li>
                  <span className="mk">✕</span>
                  <span>Tuned for foodies chasing exciting new meals.</span>
                </li>
              </ul>
            </div>
            <div className="diff-card us reveal">
              <div className="dh">Copia · budget-first</div>
              <h3>Start with “$X this week,” cook from what fits.</h3>
              <ul>
                <li>
                  <span className="mk">✓</span>
                  <span>
                    You start with your number; Copia builds a cart that fits it.
                  </span>
                </li>
                <li>
                  <span className="mk">✓</span>
                  <span>
                    Budget-fit estimates you confirm at checkout — no surprises.
                  </span>
                </li>
                <li>
                  <span className="mk">✓</span>
                  <span>Recipes come from what you bought, so you use everything.</span>
                </li>
                <li>
                  <span className="mk">✓</span>
                  <span>Made for budget-conscious households and families.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / waitlist */}
      <section className="cta-band" id="waitlist">
        <span className="blob cb1"></span>
        <span className="blob cb2"></span>
        <div className="cta-inner">
          <div className="badge">📱 Coming soon to iOS &amp; Android</div>
          <h2>
            Eat well, <span className="u">on your budget</span>.
          </h2>
          <p>
            Copia isn&apos;t in the stores yet. Join the waitlist and we&apos;ll
            let you know the moment it&apos;s ready — and help you plan your first
            week to your budget.
          </p>
          <WaitlistForm />
        </div>
      </section>

      <footer>
        <div className="wrap row">
          <div className="brand" style={{ fontSize: "16px" }}>
            <span className="dot" style={{ width: "10px", height: "10px" }}></span>
            Copia
          </div>
          <div className="spacer"></div>
          <span className="micro">
            Eat well, on your budget · Prices are estimates you confirm at
            checkout · Nutrition is informational, not medical advice.
          </span>
        </div>
      </footer>
    </>
  );
}
