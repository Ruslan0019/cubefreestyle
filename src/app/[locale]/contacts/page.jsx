export const metadata = {
  title: "Контакти | CUBE Freestyle",
  description: "Замовлення шоу футбольного фристайлу",
};

export default function ContactsPage() {
  return (
    <div className="relative w-full bg-white">
      {/* Hero */}
      <section
        className="relative w-full 
        h-[280px] lg:h-[312px] xl:h-[440px] 
        bg-[url('/assets/images/bg-pattern.webp')] bg-cover bg-center 
        flex flex-col items-center justify-center px-4"
      >
        <h1
          className="text-[36px] leading-[40px] 
          lg:text-[52px] lg:leading-[60px] 
          xl:text-[62px] xl:leading-[72px] 
          font-bold text-white text-center"
        >
          Контакти
        </h1>

        <p className="mt-4 lg:mt-6 text-[16px] lg:text-[18px] font-semibold text-white text-center">
          Замовляй шоу футбольного фристайлу
        </p>
      </section>

      {/* Контентная карточка */}
      <section className="relative z-10 flex justify-center -mt-[60px] lg:-mt-[40px] xl:-mt-[80px] px-4">
        <div
          className="
            flex flex-col lg:flex-row shadow-[0px_4px_24px_rgba(20,25,26,0.12)]
            w-full max-w-full sm:max-w-[600px] lg:max-w-[944px] xl:max-w-[1120px]
            rounded-[4px] overflow-hidden
          "
        >
          {/* Левая колонка */}
          <aside
            className="
              flex flex-col justify-center px-6 lg:px-10 gap-[24px] bg-[#F4F7FA]
              w-full lg:w-[336px] xl:w-[400px] py-10
            "
          >
            <div>
              <p className="text-[18px] text-[#02142E]">Де ми знаходимось:</p>
              <p className="font-semibold text-[18px] text-[#02142E]">Дніпро</p>
            </div>
            <div>
              <p className="text-[18px] text-[#02142E]">Де ми виступаємо:</p>
              <p className="font-semibold text-[18px] text-[#02142E]">
                вся Україна
              </p>
            </div>
            <div>
              <p className="text-[18px] text-[#02142E]">Наш телефон</p>
              <a
                href="tel:+380505916134"
                className="font-semibold text-[18px] text-[#0B63E5]"
              >
                +38 (050) 591 61 34
              </a>
            </div>
            <div>
              <p className="text-[18px] text-[#02142E]">Наша пошта</p>
              <a
                href="mailto:cubefreestyle@gmail.com"
                className="font-semibold text-[18px] text-[#0B63E5]"
              >
                cubefreestyle@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-[16px] mt-[12px]">
              <a className="w-[48px] h-[48px] rounded-[5px] bg-[#0B63E5] flex items-center justify-center shadow-md">
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a className="w-[48px] h-[48px] rounded-[5px] bg-[#0B63E5] flex items-center justify-center shadow-md">
                <img
                  src="/icons/telegram.svg"
                  alt="Telegram"
                  className="w-6 h-6"
                />
              </a>
              <a className="w-[48px] h-[48px] rounded-[5px] bg-[#0B63E5] flex items-center justify-center shadow-md">
                <img src="/icons/viber.svg" alt="Viber" className="w-6 h-6" />
              </a>
            </div>
          </aside>

          {/* Правая колонка */}
          <div
            className="
              flex flex-col items-center justify-center px-6 lg:px-[56px] bg-white
              w-full lg:w-[608px] xl:w-[720px] py-10
            "
          >
            <h2
              className="
                text-[22px] leading-[32px] font-bold text-[#02142E] text-center mb-[32px]
                lg:text-[36px] lg:leading-[40px] lg:mb-[48px]
              "
            >
              Замовлення шоу футбольного фристайлу
            </h2>

            <form className="flex flex-col gap-[24px] w-full max-w-full sm:max-w-[512px]">
              {/* Name + Phone */}
              <div className="flex flex-col lg:flex-row gap-[16px] w-full">
                <input
                  type="text"
                  placeholder="Ім’я*"
                  className="h-[48px] border border-[#EDEDED] rounded-[5px] px-[16px] text-[18px] placeholder:text-[#838E9E] flex-1 w-full"
                />
                <input
                  type="tel"
                  placeholder="+380"
                  className="h-[48px] border border-[#EDEDED] rounded-[5px] px-[16px] text-[18px] placeholder:text-[#838E9E] flex-1 w-full"
                />
              </div>

              {/* Select */}
              <select className="h-[48px] border border-[#EDEDED] rounded-[5px] px-[16px] text-[18px] text-[#02142E] placeholder:text-[#838E9E] w-full">
                <option>Оберіть послугу*</option>
                <option>Шоу на івент</option>
                <option>Промо-активація</option>
                <option>Навчання</option>
              </select>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Повідомлення (необов’язково)"
                className="border border-[#EDEDED] rounded-[5px] px-[16px] py-[12px] text-[18px] placeholder:text-[#838E9E] w-full"
              />

              {/* Button */}
              <button
                type="submit"
                className="
                  w-full sm:w-[218px] h-[56px] bg-[#0B63E5] text-white text-[18px] font-semibold rounded-[4px]
                  shadow-[0px_4px_24px_rgba(10,63,143,0.3)] mx-auto cursor-pointer 
                "
              >
                Відправити
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
