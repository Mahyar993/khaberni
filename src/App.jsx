import { motion } from "framer-motion";
import {
  Bell,
  Droplets,
  Fuel,
  HeartPulse,
  Phone,
  Download,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  ChevronDown,
  Star,
  Smartphone,
  Radio,
  Wallet,
} from "lucide-react";

import "./App.css";

const APP_NAME = "خبرني";

const features = [
  {
    icon: Droplets,
    title: "مياه اليوم",
    text: "تابع دور المياه في منطقتك بطريقة واضحة وسريعة.",
    gradient: "from-cyan",
  },
  {
    icon: Wallet,
    title: "أسعار العملات",
    text: "تحديثات مستمرة لأسعار العملات المهمة.",
    gradient: "from-blue",
  },
  {
    icon: Fuel,
    title: "المحروقات",
    text: "تابع أسعار البنزين والمازوت والخدمات المرتبطة بها.",
    gradient: "from-orange",
  },
  {
    icon: HeartPulse,
    title: "الصيدليات المناوبة",
    text: "اعرف الصيدليات المناوبة ومعلوماتها بسهولة.",
    gradient: "from-pink",
  },
  {
    icon: Phone,
    title: "أرقام مهمة",
    text: "كل الأرقام الضرورية والخدمية في مكان واحد.",
    gradient: "from-purple",
  },
  {
    icon: Bell,
    title: "إشعارات فورية",
    text: "تنبيهات مهمة تصلك مباشرة عند وجود تحديث جديد.",
    gradient: "from-yellow",
  },
];

const stats = [
  {
    value: "24/7",
    label: "متابعة مستمرة",
  },
  {
    value: "+6",
    label: "خدمات يومية",
  },
  {
    value: "لحظي",
    label: "إشعارات فورية",
  },
  {
    value: "خفيف",
    label: "أداء سريع",
  },
];

const screenshots = [
  {
    title: "الرئيسية",
    image: "/screens/home.png",
  },
  {
    title: "العملات",
    image: "/screens/currency.png",
  },
  {
    title: "الصيدليات المناوبة",
    image: "/screens/pharmacy.png",
  },
];

const floatingCards = [
  {
    icon: Droplets,
    text: "مياه اليوم",
    className: "float-card card-water",
  },
  {
    icon: Bell,
    text: "تنبيه جديد",
    className: "float-card card-alert",
  },
  {
    icon: Fuel,
    text: "المحروقات",
    className: "float-card card-fuel",
  },
  {
    icon: Wallet,
    text: "العملات",
    className: "float-card card-money",
  },
];

function App() {
  const downloadApk = () => {
    window.location.href = "/download/khaberni.apk";
  };

  const scrollToDownload = () => {
    document
      .getElementById("download")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="site" dir="rtl">
      <div className="noise" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <nav className="navbar">
        <motion.div
          className="brand"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <img src="/logo.png" alt={APP_NAME} />
          <div>
            <strong>{APP_NAME}</strong>
            <span>كل المعلومات في مكان واحد</span>
          </div>
        </motion.div>

        <motion.div
          className="nav-links"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          <a href="#features">المميزات</a>
          <a href="#experience">التجربة</a>
          <a href="#download">تحميل التطبيق</a>
        </motion.div>

        <motion.button
          className="nav-download"
          onClick={scrollToDownload}
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <Download size={18} />
          تحميل
        </motion.button>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-grid">
            <motion.div
              className="hero-content"
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
              }}
            >
              <div className="hero-badge">
                <Sparkles size={18} />
                تطبيق خدمي ذكي وسريع
              </div>

              <h1>
                <span>خبرني</span>
                كل الخدمات اليومية
                <br />
                في تطبيق واحد
              </h1>

              <p>
                تابع المياه، العملات، المحروقات، الصيدليات، الإعلانات المحلية،
                والأرقام المهمة من واجهة واحدة أنيقة وسريعة.
              </p>

              <div className="hero-tags">
                <span>💧 المياه</span>
                <span>💰 العملات</span>
                <span>⛽ المحروقات</span>
                <span>💊 الصيدليات</span>
              </div>

              <div className="hero-actions">
                <button className="primary-btn" onClick={downloadApk}>
                  <Download size={20} />
                  تحميل التطبيق
                </button>

                <button className="outline-btn" onClick={scrollToDownload}>
                  شاهد المزيد
                  <ChevronDown size={20} />
                </button>
              </div>

              <div className="trust-row">
                <div>
                  <ShieldCheck size={20} />
                  آمن وسريع
                </div>

                <div>
                  <Radio size={20} />
                  تحديثات مباشرة
                </div>

                <div>
                  <Zap size={20} />
                  خفيف الأداء
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            >
              <div className="phone-glow" />

              <motion.div
                className="app-icon-stage"
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img src="/logo.png" alt={APP_NAME} />
              </motion.div>

              {floatingCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.text}
                    className={card.className}
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon size={18} />
                    <span>{card.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="stats-bar"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            {stats.map((item) => (
              <div key={item.label} className="stat-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="features" className="features-section">
          <motion.div
            className="section-heading"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <span>المميزات</span>
            <h2>كل ما تحتاجه خلال يومك</h2>
            <p>
              تصميم بسيط من الخارج، ونظام ذكي من الداخل لتجربة استخدام أسرع
              وأسهل.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  className={`feature-card ${feature.gradient}`}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <div className="feature-icon">
                    <Icon size={34} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>

                  <div className="card-shine" />
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="experience-grid">
            <motion.div
              className="experience-text"
              initial={{
                opacity: 0,
                x: 70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >
              <span>تجربة التطبيق</span>
              <h2>واجهة حديثة، سريعة، وواضحة</h2>
              <p>
                صممنا خبرني ليكون بسيطًا للمستخدم اليومي، وسريعًا في عرض
                المعلومات، مع واجهة مناسبة لكل الأعمار.
              </p>

              <ul>
                <li>
                  <Star size={18} />
                  عرض واضح للأقسام والخدمات
                </li>
                <li>
                  <Star size={18} />
                  إشعارات مهمة بدون إزعاج
                </li>
                <li>
                  <Star size={18} />
                  تحديثات منظمة حسب التاريخ والوقت
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="screenshots-wall"
              initial={{
                opacity: 0,
                x: -70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >
              {screenshots.map((screen, index) => (
                <motion.div
                  key={screen.title}
                  className={`screen-card screen-${index}`}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                >
                  <div className="screen-frame">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="screen-fallback">
                      <Smartphone size={46} />
                      <span>{screen.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="premium-section">
          <motion.div
            className="premium-card"
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="premium-icon">
              <Globe2 size={38} />
            </div>

            <h2>معلومة واضحة في الوقت المناسب</h2>

            <p>
              هدف خبرني ليس عرض البيانات فقط، بل إيصال المعلومة المهمة للمستخدم
              في اللحظة المناسبة وبأبسط طريقة ممكنة.
            </p>

            <div className="premium-points">
              <span>تنظيم</span>
              <span>سرعة</span>
              <span>وضوح</span>
              <span>إشعارات</span>
            </div>
          </motion.div>
        </section>

        <section id="download" className="download-section">
          <motion.div
            className="download-box"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="download-content">
              <span>جاهز للتجربة؟</span>
              <h2>حمّل تطبيق خبرني الآن</h2>
              <p>
                احصل على الخدمات والمعلومات اليومية المهمة من هاتفك مباشرة.
              </p>
            </div>

            <button className="download-btn" onClick={downloadApk}>
              <Download size={22} />
              تحميل APK
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <img src="/logo.png" alt={APP_NAME} />
          <strong>{APP_NAME}</strong>
        </div>

        <p>كل المعلومات في مكان واحد</p>

        <span>© 2026 خبرني. جميع الحقوق محفوظة.</span>
      </footer>
    </div>
  );
}

export default App;