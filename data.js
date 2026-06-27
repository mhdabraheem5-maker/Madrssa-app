// ===== MADRASSA DATA FROM PROSPECTUS 2026-27 =====

const SECTIONS = {

  hifz: {
    title: 'شعبہ حفظ',
    icon: '📖',
    content: `
      <div class="detail-intro">
        <p>آمینِ کریم کی حفاظت کا ذمہ خود پروردگار نے لیا ہے اور اس مقصد کے لیے ہم نے ادارے میں ایک مثالی، پرسکون اور روحانی ماحول قائم کیا ہے جہاں طلبہ کو قرآن مجید کے اساسی قواعد کے ساتھ حفظ کرنے کی سعادت فراہم کی جاتی ہے۔</p>
      </div>

      <div class="info-card">
        <h3>🔷 ڈیجیٹل مانیٹرنگ سسٹم</h3>
        <p>یہاں حفظ کا ایک مربوط نظام قائم ہے۔ طلبہ کے سبق، منزل اور خارج کی یومیہ رپورٹ ڈیجیٹل ٹیسٹ سسٹم کے تحت تیار کی جاتی ہے اور والدین کی سہولت کے لیے یہ رپورٹ روزانہ واٹس ایپ کے ذریعے ارسال کی جاتی ہے تاکہ گھر بیٹھے بھی بچے کی علمی رفتار پر نظر رکھی جا سکے۔</p>
      </div>

      <div class="info-card">
        <h3>📚 خوبصورت لہجے کی تعلیم</h3>
        <p>ادارہ اپنے منظم و مضبوط نظم و ضبط میں بے مثال ہے۔ یہاں طلبہ کو نہ صرف مخارج اور خوبصورت لہجے پر توجہ دی جاتی ہے بلکہ درس یومیہ رپورٹ میں سبق، پارے اور خارج کا مکمل احوال شامل ہوتا ہے۔</p>
      </div>

      <div class="info-card">
        <h3>🎯 زبانی آزمائش (Oral Tests)</h3>
        <p>تحریری ٹیسٹ کے ساتھ ساتھ تمام کتب کا روزانہ کی بنیاد پر "زبانی آزمائش" بھی لیا جاتا ہے جس سے بچے کی یادداشت اور اعتماد میں اضافہ ہوتا ہے۔</p>
      </div>

      <div class="info-card">
        <h3>📊 پہلی اور دوسری قوت ٹیسٹ</h3>
        <p>پہلی قوت ٹیسٹ میں طلبہ اپنی "منزل" کلاس میں نکالتے ہیں اور دوسری قوت ٹیسٹ میں اسے پختہ کرتے ہیں تاکہ قرآن کریم ہمیشہ کے لیے سینوں میں محفوظ رہے۔</p>
      </div>
    `
  },

  dars: {
    title: 'درس نظامی',
    icon: '🕌',
    content: `
      <div class="detail-intro">
        <p>درس نظامی ہمارے مرکز کی روح ہے جہاں منظم المدارس پاکستان کے تحت مستند نصاب پڑھایا جاتا ہے۔ یہ علمی دریا ہے جس میں غوطہ زن ہوکر طلبہ صدیوں پر محیط اسلامی ورثہ، لغت، ادب اور حکمت سے آشنا ہوتے ہیں۔</p>
      </div>

      <!-- سال اول -->
      <div class="class-card">
        <div class="class-card-header" onclick="toggleCard(this)">
          <h3>سال اول</h3>
          <span class="toggle-icon">←</span>
        </div>
        <div class="class-card-body">
          <div class="subject-row">
            <span class="subject-name">ترجمہ قرآن</span>
            <span class="subject-book">ہر آیت کا ہر لفظ ترجمہ</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">علم تجوید</span>
            <span class="subject-book">تجوید کے اصول</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">صرف</span>
            <span class="subject-book">میزان الصرف، رل (ترمجہ صرف از عبدالرزاق اولڈواریؒ)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">نحو</span>
            <span class="subject-book">نحو میر، منظم الاعلام</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">عقائد</span>
            <span class="subject-book">قانون شریعت (از ابتدا تا تقلید)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">فقہ</span>
            <span class="subject-book">قانون شریعت (از نماز تا جمعہ)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">سیرت</span>
            <span class="subject-book">سیرت انبیاء ترمجہ (از عبدالرحمن ابن جوزیؒ)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">عربی ادب</span>
            <span class="subject-book">طریقہ خطیبہ (حصہ اول، دوم، سوم)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">جنرل سائنس</span>
            <span class="subject-book">سائنس کا تعارف، کردار، ووجوہات، بنیادی الیکٹریکل</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">مطالعہ پاکستان</span>
            <span class="subject-book">اسلامی پاکستان، تحریک پاکستان، پاکستان کی برسی</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="marks-summary">
            <h4>نمبر تقسیم — سال اول</h4>
            <div class="marks-row">
              ترجمہ قرآن: (ترجمہ: ۷۰، تجوید: ۳۰) • اقعائد و فقہ: (عقائد: ۵۰، فقہ: ۵۰)<br>
              صرف: (میزان الصرف: ۵۰، صرف بہتر ال: ۵۰) • نحو: (نحو میر: ۷۰، منظم الاعلام: ۳۰)<br>
              سیرت: (بیان الانبیاء: ۵۰، طریقہ خطیبہ ح دوم و سوم: ۵۰)
            </div>
          </div>
        </div>
      </div>

      <!-- سال دوم -->
      <div class="class-card">
        <div class="class-card-header" onclick="toggleCard(this)">
          <h3>سال دوم</h3>
          <span class="toggle-icon">←</span>
        </div>
        <div class="class-card-body">
          <div class="subject-row">
            <span class="subject-name">ترجمہ قرآن و فقہ</span>
            <span class="subject-book">ترجمہ (پارہ ۴ تا ۹) + نور الایضاح</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">صرف</span>
            <span class="subject-book">علم الصرف، فصیلی اربکی (خاص ابواب)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">نحو</span>
            <span class="subject-book">دہائی حنل، شرح امئ الاعلام</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">عربی ادب و منطق</span>
            <span class="subject-book">الاطلاق العربیۃ + تعلیم المنطق</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">حساب</span>
            <span class="subject-book">ریاضی (زکوٰۃ، عشر، ارث، دصد، نسبت)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">انگریزی</span>
            <span class="subject-book">The Saviour of Mankind, Patriotism, First Aid, Peace, Faithfulness + Grammar</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="marks-summary">
            <h4>نمبر تقسیم — سال دوم</h4>
            <div class="marks-row">
              ترجمہ و فقہ: (ترجمہ: ۵۰، نور الایضاح: ۵۰) • صرف: (علم الغصیلی: ۶۰، فصیلی اربکی: ۴۰)<br>
              نحو: (دہائی حنل: ۶۰، شرح امئ اعلام: ۴۰) • عربی ادب و منطق: (الاطلاق: ۵۰، تعلیم منطق: ۵۰)<br>
              انگریزی: (کتاب: ۶۰، گرامر: ۴۰)
            </div>
          </div>
        </div>
      </div>

      <!-- خاصہ اول -->
      <div class="class-card">
        <div class="class-card-header" onclick="toggleCard(this)">
          <h3>خاصہ اول</h3>
          <span class="toggle-icon">←</span>
        </div>
        <div class="class-card-body">
          <div class="subject-row">
            <span class="subject-name">ترجمہ قرآن و حدیث</span>
            <span class="subject-book">ترجمہ (پارہ ۱۰ تا ۱۸) + ربیض الصالحین</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">عقائد و مطالعہ مذاہب</span>
            <span class="subject-book">لعقائد و اسلامی اسملئ + ردّ الرفصوں + رد قادیانی</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">فقہ و اصول فقہ</span>
            <span class="subject-book">قدوری شریف (مکمل) + اصول الشاشی (مکمل)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">نحو (کافیہ)</span>
            <span class="subject-book">کافیہ (مکمل)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">بلاغ و منطق</span>
            <span class="subject-book">دروس البلاغۃ + مرقات (مکمل)</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">سیرت و تاریخ</span>
            <span class="subject-book">سیرت رسول عربی ﷺ + تاریخ خلفاء + فتنہ انکاری حدیث</span>
            <span class="subject-marks">۱۰۰</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">بیان قرآن (ج ۹)</span>
            <span class="subject-book">سورۃ الاحزاب، زیئی آیات ۴۰ (از علامہ غلام رسول سعیدیؒ)</span>
            <span class="subject-marks">—</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">ردّ رفضاء</span>
            <span class="subject-book">ردّ الرفصوۃ (از علامہ احمد رضا قادریؒ)</span>
            <span class="subject-marks">—</span>
          </div>
          <div class="subject-row">
            <span class="subject-name">ردّ انکاری فتنہ</span>
            <span class="subject-book">خیر الابیاب + سؤر مصطفیٰ ﷺ + ردّ اانکاری فتنہ</span>
            <span class="subject-marks">—</span>
          </div>
          <div class="marks-summary">
            <h4>نمبر تقسیم — خاصہ اول</h4>
            <div class="marks-row">
              ترجمہ و حدیث: (ترجمہ: ۵۰، ربیض: ۵۰) • عقائد: (لعقائد: ۵۰، رد مذاہب: ۳۰، رد قادیانی: ۲۰)<br>
              فقہ و اصول: (قدوری: ۵۰، اصول الشاشی: ۵۰) • بلاغ و منطق: (دروس: ۵۰، مرقات: ۵۰)<br>
              سیرت و تاریخ: (سیرت ﷺ: ۴۰، خلفاء: ۳۰، فتنہ انکاری حدیث: ۳۰)
            </div>
          </div>
        </div>
      </div>
    `
  },

  asri: {
    title: 'عصری تعلیم',
    icon: '📚',
    content: `
      <div class="detail-intro">
        <p>اسلامک سینٹر اس فکر پر یقین رکھتا ہے کہ موجودہ دور کا طالب علم اگر عصری علوم سے واقف نہیں ہوگا، تو وہ اسلام کے چیلنجوں کا مقابلہ نہیں کر سکے گا۔ راصن انیعل ایسی شخصیت کی تعمیر ہے جس کے ایک ہاتھ میں قرآن اور دوسرے ہاتھ میں جدید سائنس کی مشعل تھامے ہو۔</p>
      </div>

      <div class="info-card">
        <h3>📋 نویں اور دسویں جماعت</h3>
        <p>درسی نظام (معالم کورس) کے ساتھ ساتھ نویں (9th) اور دسویں (10th) جماعت کی باقاعدہ، منظم اور پیشہ ورانہ تدریس کا اہتمام کیا جاتا ہے۔ تمام تعلیمی امور اور امتحانات "ادارہ مصطفیٰ اسکول اینڈ کالج" کے پلیٹ فارم سے بھیجے جاتے ہیں۔</p>
      </div>

      <div class="info-card">
        <h3>🎯 تصوراتی تعلیم (Conceptual Learning)</h3>
        <p>ہماری طریقہ تدریس روٹ لرننگ کے بجائے "تصوراتی سمجھ" پر مبنی ہے جس سے طلبہ بورڈ کے امتحانات میں نمایاں کامیابی حاصل کرتے ہیں۔</p>
      </div>

      <div class="info-card">
        <h3>📚 مضامین</h3>
        <ul>
          <li>اردو، انگریزی، اسلامیات</li>
          <li>ریاضی، سائنس (جنرل و کمپیوٹر)</li>
          <li>مطالعہ پاکستان، تاریخ</li>
          <li>کمپیوٹر کورسز و تکنیکی مہارتیں</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>⚖️ متوازن تعلیم</h3>
        <p>اس مرحلے میں اسکول کی تعلیم (بورڈ نصاب) اور درسی نظام کی کلاسز بیک وقت جاری رہتی ہیں۔ طلبہ کو ایک متوازن طریقے پر اجعماصن (جامعہ) کے تحت کمپیوٹر کورسز، عربی ادب اور دیگر فنی مہارتیں بھی سکھائی جاتی ہیں۔</p>
      </div>
    `
  },

  computer: {
    title: 'کمپیوٹر لیب و میڈیا اسٹوڈیو',
    icon: '💻',
    content: `
      <div class="detail-intro">
        <p>موجودہ دور انفارمیشن ٹیکنالوجی اور ڈیجیٹل میڈیا کا دور ہے۔ اسلامک سینٹر اس ضرورت سے خوبی سے آگاہ ہے کہ حق کو دنیا کے کونے کونے میں پہنچانے کے لیے جدید وسائل کا مثبت استعمال ضروری ہے۔</p>
      </div>

      <div class="info-card">
        <h3>💻 کمپیوٹر لیب</h3>
        <ul>
          <li><strong>MS Word</strong> — تحقیق و مقالہ نگاری کے لیے</li>
          <li><strong>گرافک ڈیزائننگ</strong> — دعوتی پوسٹرز کے لیے</li>
          <li><strong>یوٹیوب یونیٹی</strong> — ویڈیو ایڈیٹنگ کے لیے</li>
          <li>پیشہ ورانہ کورسز و سرٹیفکیٹ</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>🎬 میڈیا اسٹوڈیو</h3>
        <p>مرکز کا میڈیا اسٹوڈیو طلبہ کی تعلیمی و تربیتی سرگرمیوں، تلاوت، نعت اور بیان کو اعلیٰ معیار پر ریکارڈ کرکے سوشل میڈیا (Facebook, YouTube, TikTok) پر نشر کرتا ہے۔</p>
      </div>

      <div class="info-card">
        <h3>🌐 ڈیجیٹل دین کا چیلنج</h3>
        <p>ہمارا مقصد یہ ہے کہ طالب علم سوشل میڈیا کو ایک مؤثر ہتھیار کے طور پر استعمال کرے — اسے منفی اثرات سے محفوظ رہے اور اسے نوتوں کے سدّ باب اور دینی اسلامی کی صحیح اشاعت کے لیے بروئے کار لائے۔ اس شعبے کے ذریعے ہم ایسے علماء تیار کر رہے ہیں جو ڈیجیٹل دین کے چیلنج سے نمٹنے کی پوری اہلیت رکھتے ہوں۔</p>
      </div>
    `
  },

  activities: {
    title: 'سرگرمیاں و تقریبات',
    icon: '🏆',
    content: `
      <div class="detail-intro">
        <p>اسلامک سینٹر میں تعلیمی سال کا آغاز محض کتابوں کی تقسیم سے نہیں ہوتا — یہ ایک منظم اور جامع علمی سفر ہے جو پورے سال کی سرگرمیوں پر محیط ہوتا ہے۔</p>
      </div>

      <div class="info-card">
        <h3>📅 سالانہ کیلنڈر ۲۰۲۶-۲۷</h3>
        <ul>
          <li><strong>مئی:</strong> خصوصی شاندار تربیت اور داعیہ تقریر — نئے تعلیمی سال کا آغاز</li>
          <li><strong>۱۴ مئی:</strong> اہسای ہائی ظہائی میٹنگ</li>
          <li><strong>۱۵ تا ۲۱ مئی:</strong> پہلے ماہانہ تعلیمی امتحانات</li>
          <li><strong>۲۳ جون:</strong> حسنِ قرأت مسابقہ</li>
          <li><strong>۲۶ جون:</strong> ماہانہ شاندار تربیت</li>
          <li><strong>۲۸ جولائی:</strong> مسابقہ سیرت طیبہ ﷺ</li>
          <li><strong>۳۱ جولائی:</strong> ماہانہ تربیت</li>
          <li><strong>۲۵ اگست:</strong> مسابقہ تقریر</li>
          <li><strong>۲۸ اگست:</strong> ماہانہ تربیت</li>
          <li><strong>۲۵ ستمبر:</strong> نصف سالہ امتحانات (مشیر) کا آغاز</li>
          <li><strong>۳ اکتوبر:</strong> والدین اور ہاسٹی کی ملاقات — M.T.P Day</li>
          <li><strong>۳۱ اکتوبر:</strong> ماہانہ تربیت</li>
          <li><strong>۲۱ نومبر:</strong> "اسپورٹس ڈے" — طلبہ کی جسمانی صحت کے لیے</li>
          <li><strong>۲۸ نومبر:</strong> ماہانہ تربیت</li>
          <li><strong>۸ دسمبر:</strong> "سفرِ علمی" — ذہنی شگوفہ</li>
          <li><strong>۲۵ دسمبر:</strong> خصوصی تعلیمی پروگرام</li>
          <li><strong>۳۱ دسمبر:</strong> سالانہ جامع میٹنگ</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>🎤 ادبی سوسائٹی و تربیتی نشستیں</h3>
        <p>تعلیم کا اصل مقصد طالب علم کی شخصیت کو نکھارنا اور اس کی پیچھی ہوئی اصل صلاحیتوں کو جلا بخشنا ہے۔ اسلامک سینٹر میں طلبہ کی ہمہ جہت شخصیت سازی کے لیے ہفتے میں ایک پروقار اور پُرجوش ادبی تربیتی نشست "ادب و خطابت" کا اہتمام کیا جاتا ہے۔</p>
      </div>

      <div class="info-card">
        <h3>⚽ کھیل و صحت</h3>
        <p>مرکز میں ایک وسیع اور کھلا میدان مخصوص ہے جہاں روزانہ ایک گھنٹے کا وقت دیا جاتا ہے — کرکٹ، فٹ بال اور دیگر ورزشیں۔ یہ فرحت طلبہ کو دوبارہ سے چاق و چوبند کرتی ہے۔</p>
      </div>

      <div class="info-card">
        <h3>🕌 اسلامی شعائر و سماجی خدمات</h3>
        <ul>
          <li><strong>رمضان المبارک:</strong> روزانہ اجتماعی افطاری — طلبہ میزبانی کا کردار ادا کرتے ہیں</li>
          <li><strong>۱۲ ربیع الاول:</strong> منظم و با وقار "نعم ریلی" کا انعقاد</li>
          <li><strong>عید الضحیٰ:</strong> "اجتماعی قربانی" — طلبہ انتظامی امور میں بھرپور حصہ لیتے ہیں</li>
        </ul>
      </div>
    `
  },

  imtihan: {
    title: 'نظامِ امتحان',
    icon: '📝',
    content: `
      <div class="detail-intro">
        <p>اسلامک سینٹر میں ہم اس نظر پر یقین رکھتے ہیں کہ تعلیم بچے کے لیے بوجھ نہیں بلکہ شوق ہونا چاہیے۔ اسی لیے ہم نے روایتی "ہفتہ وار بوجھ" کے بجائے "روزانہ مختصر جائزہ" کا آسان اور لسلسل نظام وضع کیا۔</p>
      </div>

      <div class="exam-step">
        <div class="step-num">۱</div>
        <div class="step-content">
          <h4>روزانہ مختصر ٹیسٹ (Daily Assessment)</h4>
          <p>ہر روز ایک کتاب کا مختصر تحریری ٹیسٹ لیا جاتا ہے۔ بچے کو صرف ایک ہی مضمون کا بوجھ محسوس نہیں ہوتا۔ ٹیسٹ مختصر دورانیے کا ہے — وقت ضائع نہیں ہوتا اور نصاب بھی تیزی سے مکمل ہوتا ہے۔ اس کے ساتھ زبانی آزمائش بھی لی جاتی ہے۔</p>
        </div>
      </div>

      <div class="exam-step">
        <div class="step-num">۲</div>
        <div class="step-content">
          <h4>ماہانہ آزمائش (Monthly Test)</h4>
          <p>مہینے کے آخر میں تمام مضامین کا ایک باقاعدہ جامع ٹیسٹ لیا جاتا ہے جس کی رپورٹ کارڈ تیار کرکے والدین کو ارسال کی جاتی ہے۔</p>
        </div>
      </div>

      <div class="exam-step">
        <div class="step-num">۳</div>
        <div class="step-content">
          <h4>سہ ماہی امتحانات (Quarterly Exams)</h4>
          <p>تین ماہ بعد ہونے والے امتحانات کے بعد والدین کے ساتھ خصوصی نشست (PTM) کا انعقاد کیا جاتا ہے تاکہ بچے کی تعلیمی و اخلاقی صورت حال پر تفصیلی گفتگو ہو سکے۔</p>
        </div>
      </div>

      <div class="exam-step">
        <div class="step-num">۴</div>
        <div class="step-content">
          <h4>ششماہی امتحانات (Mid-Term Exams)</h4>
          <p>ستمبر میں منعقد ہونے والے یہ امتحانات "پری فائنل" ہوتے ہیں۔ یہ المدارس اور بورڈ کے معیار کے مطابق لیے جاتے ہیں تاکہ بچہ سالانہ امتحان کے لیے مکمل ذہنی طور پر تیار ہو جائے۔</p>
        </div>
      </div>

      <div class="info-card">
        <h3>📆 سال کی تین مراحل میں تقسیم</h3>
        <ul>
          <li><strong>پہلا مرحلہ (راضمن المبارک تا ختم):</strong> عصری تعلیم پر توجہ — 9th/10th کی تیاری</li>
          <li><strong>دوسرا مرحلہ (عید الفطر تا دسمبر):</strong> دونوں تعلیم ایک ساتھ — جامع تعلیمی نظام</li>
          <li><strong>تیسرا مرحلہ (دسمبر تا سالانہ امتحان):</strong> صرف درسی نظام — سالانہ امتحانات کی تیاری</li>
        </ul>
      </div>
    `
  },

  holidays: {
    title: 'تعطیلات کا شیڈول',
    icon: '📅',
    content: `
      <div class="detail-intro">
        <p>تعلیمی سرگرمیوں کے ساتھ ساتھ طلبہ کی ذہنی اور آرام کے لیے اسلامک سینٹر نے ایک متوازن شیڈول بنایا ہے۔ یہ تعطیلات مذہبی اہمیت اور طلبہ کی جسمانی ضرورت کو مدنظر رکھتے ہوئے دی جاتی ہیں۔</p>
      </div>

      <div class="holiday-row">
        <span class="holiday-name">عید الفطر</span>
        <span class="holiday-days">۱۰ ایام</span>
      </div>
      <div class="holiday-row">
        <span class="holiday-name">عید الاضحیٰ</span>
        <span class="holiday-days">۷ ایام</span>
      </div>
      <div class="holiday-row">
        <span class="holiday-name">۱۲ ربیع الاول (عید میلاد النبی ﷺ)</span>
        <span class="holiday-days">خصوصی چھٹی</span>
      </div>
      <div class="holiday-row">
        <span class="holiday-name">اجتماع محرم الحرام</span>
        <span class="holiday-days">خصوصی چھٹی</span>
      </div>
      <div class="holiday-row">
        <span class="holiday-name">ادارے کا عرس مبارک (۲۵ اکتوبر)</span>
        <span class="holiday-days">خصوصی چھٹی</span>
      </div>
      <div class="holiday-row">
        <span class="holiday-name">موسمی تعطیلات (شدید سردی)</span>
        <span class="holiday-days">۴ ایام</span>
      </div>
      <div class="holiday-row">
        <span class="holiday-name">سالانہ امتحان کے بعد تعلیمی وقفہ</span>
        <span class="holiday-days">۲ ایام</span>
      </div>

      <div class="info-card" style="margin-top:1rem;">
        <h3>ℹ️ غیر حاضری کے اصول</h3>
        <ul>
          <li>رخصت کے لیے پہلے درفتر میں فون یا واٹس ایپ کے ذریعے اطلاع دینا لازم ہے</li>
          <li>بلا اطلاع رخصت پر ۳۰۰ روپے جرمانہ ہوگا</li>
          <li>ایک ماہ میں تین بلا اجازت چھٹیاں "خارج از مدرسہ" (مستقل خارجِ خانہ) کا باعث بن سکتی ہیں</li>
        </ul>
      </div>
    `
  },

  rules: {
    title: 'قوانین و ضوابط',
    icon: '⚖️',
    content: `
      <div class="detail-intro">
        <p>کسی بھی مثالی تعلیمی ادارے کی پہچان وہاں کا نظم و ضبط ہوتا ہے۔ اسلامک سینٹر میں ہم طلبہ کی اخلاقی اور کردار سازی کو اولیٰ ترجیح دیتے ہیں۔ یہ قوانین سزا کے لیے نہیں بلکہ طلبہ کی زندگیوں میں تربیت اور وقار پیدا کرنے کے لیے بنائے گئے ہیں۔</p>
      </div>

      <div class="info-card">
        <h3>🕐 اوقاتِ کار اور حاضری</h3>
        <ul>
          <li>تمام طلبہ کے لیے لازم ہے کہ صبح الصبح کے مقررہ وقت سے کم از کم ۵ منٹ پہلے وضو اور مکمل لباس سنت کے مطابق باقاعدہ جماعت صبح کی شریف میں حاضر ہوں</li>
          <li>وقت کی پابندی اسلامی شعار ہے</li>
          <li>خیر سے آنے والے طالب علم پر ۲۰۰ روپے جرمانہ عائد کیا جائے گا</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>📋 رخصت کا طریقہ کار</h3>
        <ul>
          <li>غیر معمولی صورت حال میں رخصت کرنے کے لیے پہلے درفتر میں فون یا واٹس ایپ کے ذریعے اطلاع دینا لازم ہے</li>
          <li>بلا اطلاع رخصت پر ۳۰۰ روپے جرمانہ</li>
          <li>ایک ماہ میں تین بلا اجازت چھٹیاں "خارج از مدرسہ" کا باعث بن سکتی ہیں</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>📝 امتحان ذمہ داریاں</h3>
        <ul>
          <li>تعلیمی معیار کو برقرار رکھنے کے لیے تمام امتحانات میں حاضری لازم ہے</li>
          <li>پرچوں کے دوران بلا عذر شرعی غیر حاضری کی صورت میں ۵۰۰ روپے جرمانہ مقرر ہے</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>⚠️ اخلاقی حدود</h3>
        <ul>
          <li>اسلامک سینٹر اخلاق کا گہوارہ ہے</li>
          <li>لڑائی جھگڑا، بدتمیزی، بدگفتگو کسی بھی مسئلے پر "زیرو ٹولرنس پالیسی" ہے</li>
          <li>ایسی کسی بھی خلاف ورزی کی صورت میں ۵۰۰۰ روپے جرمانہ عائد کیا جائے گا اور والدین کو بلایا جائے گا</li>
        </ul>
      </div>
    `
  },

  islami: {
    title: 'اسلامی شعائر و سماجی خدمات',
    icon: '🌙',
    content: `
      <div class="detail-intro">
        <p>اسلامک سینٹر اپنے طلبہ کی یہ تربیت کرتا ہے کہ وہ معاشرے کے ان رہنما بنیں جہاں اس رواں اسلامی تعلیم کا راسب اثر نظر آتا ہے — سرگرمیاں جاری رہتی ہیں تاکہ ان میں تواضع، بھائی چارہ اور دینی غیرت پیدا ہو۔</p>
      </div>

      <div class="info-card">
        <h3>🌙 رمضان المبارک — اجتماعی افطاری</h3>
        <p>رمضان المبارک میں مرکز میں روزانہ اجتماعی افطاری کا اہتمام کیا جاتا ہے۔ مرکز کے طلبہ میزبانی کا کردار ادا کرتے ہوئے آنے والے مہمانوں اور روزہ داروں کی خدمت میں پیش پیش رہتے ہیں۔ یہ سرگرمی ان میں ایثار، بذل اور دوسروں کی خدمت کرنے کا عملی جذبہ بیدار کرتی ہے۔</p>
      </div>

      <div class="info-card">
        <h3>✨ ۱۲ ربیع الاول — نعت ریلی و جشن میلاد النبی ﷺ</h3>
        <p>رسول اکرم یلصاہلل ہیلعواہل وملس کی بابرکت ولادت کے موقع پر مرکز میں ہر سال تمام طلبہ مکمل منظم ضبط (Discipline) کے ساتھ ایک پُروقار "نعم ریلی" میں شریک ہوتے ہیں اور اپنے بزرگانہ طریقے سے عوام الناس کو اسلام کے نام، محبت اور اخوت کا پیغام دیتے ہیں۔</p>
      </div>

      <div class="info-card">
        <h3>🐏 عید الاضحیٰ — اجتماعی قربانی</h3>
        <p>قربانی کے مبارک موقع پر اسلامک سینٹر میں "اجتماعی قربانی" کا اہتمام ہوتا ہے۔ طلبہ انتظامی امور میں بھرپور حصہ لیتے ہیں — گوشت کی تقسیم سے لے کر دیگر انتظامات میں — تاکہ وہ یہ سیکھیں کہ دینِ اسلام میں انسانیت کا درجہ کتنا بلند ہے۔</p>
      </div>
    `
  },

  parents: {
    title: 'والدین سے اہتمام',
    icon: '👨‍👩‍👧',
    content: `
      <div class="detail-intro">
        <p>اسلامک سینٹر کی انتظامیہ یہ سمجھتی ہے کہ آپ کے بچے کی مثالی تربیت صرف ہمارے ادارے کی تنہا محنت سے ممکن نہیں — بلکہ یہ والدین اور ادارے کے مابین ایک مضبوط بندھ اور مسلسل تعاون کا نتیجہ ہے۔</p>
      </div>

      <div class="info-card">
        <h3>📞 باقاعدہ رابطہ</h3>
        <p>بچے کی تعلیمی و اخلاقی صورت حال جاننے کے لیے مہینے میں کم از کم ایک بار ادارے میں تشریف لائیں اور استاد سے ملاقات کریں۔ رزلٹ ڈے پر آپ کی موجودگی بچے کے حوصلے کو بلند کرتی ہے۔</p>
      </div>

      <div class="info-card">
        <h3>📱 ڈیجیٹل آگاہی</h3>
        <p>ادارے کی جانب سے بنائے گئے آفیشل واٹس ایپ گروپ کو باقاعدگی سے فالو کریں تاکہ بچے کی یہ رپورٹ اور انتظامی اعلانات سے با خبر رہ سکیں۔</p>
      </div>

      <div class="info-card">
        <h3>🏠 گھریلو ماحول</h3>
        <p>گھر پر بھی بچے کے اخلاق، نماز کی پابندی اور دینی اسباق کی تیاری پر نظر رکھیں۔ آپ کا تھوڑا سا وقت اور توجہ آپ کے لخت جگر کو دین و دنیا کی کامیابیوں سے ہمکنار کر سکتی ہے۔</p>
      </div>

      <div class="info-card">
        <h3>🤝 والدین سے درخواست</h3>
        <ul>
          <li>بچے کی تعلیم کا سفر ایک مشترکہ سفر ہے</li>
          <li>ادارے کے قوانین کی گھر پر بھی پاسداری کروائیں</li>
          <li>بچے کو وقت پر مدرسے بھیجیں اور گھر پر ماحول سازگار رکھیں</li>
          <li>استاد کے ساتھ احترام و اعتماد کا تعلق قائم رکھیں</li>
        </ul>
      </div>
    `
  }

};
