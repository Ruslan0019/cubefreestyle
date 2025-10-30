import HeroArc from "@/components/HeroArc/HeroArc";
import { getLocale } from "next-intl/server";
import { getPage } from "../../../../lib/md";

export const metadata = {
  title: "Контакти | CUBE Freestyle",
  description: "Замовлення шоу футбольного фристайлу",
};

export default async function ContactsPage() {
  const locale = await getLocale();
  const contactsPage = await getPage("contacts", locale);
  return (
    <section className="relative w-full bg-white">
      <div className="relative w-full flex flex-col items-center justify-start bg-white">
        <HeroArc />
        <h1 className="mt-12 lg:mt-14 xl:mt-[80px] text-[36px] z-1 leading-[40px] lg:text-[48px] lg:leading-[56px] xl:text-[62px] xl:leading-[72px] font-bold text-white text-center max-w-[343px] lg:max-w-[983px]">
          {contactsPage.title}
        </h1>
        <p className="z-1 mt-4 lg:mt-6 max-w-[343px] lg:max-w-[804px] text-[16px] lg:text-[18px] font-semibold text-white text-center">
          {contactsPage.subtitle}
        </p>
      </div>

      <section className="relative z-10 flex justify-center m-12 lg:mt-14- xl:mt-[80px] px-4">
        <div
          className="
            flex flex-col lg:flex-row shadow-[0px_4px_24px_rgba(20,25,26,0.12)]
            w-full max-w-full sm:max-w-[600px] lg:max-w-[944px] xl:max-w-[1120px]
            rounded-[4px] overflow-hidden
          "
        >
          <aside
            className="
              flex flex-col justify-center px-6 lg:px-10 gap-[24px] bg-[#F4F7FA]
              w-full lg:w-[336px] xl:w-[400px] py-10
            "
          >
            <div className="flex gap-6 ">
              <svg width="32" height="32">
                <use href="/sprite.svg#contactLocation" />
              </svg>
              <div>
                <p className="text-[18px] text-[#02142E]">
                  {contactsPage.contact_info.location_title}
                </p>
                <p className="font-semibold text-[18px] text-[#02142E]">
                  {contactsPage.contact_info.location_value}
                </p>
              </div>
            </div>
            <div className="flex gap-6 ">
              <svg width="32" height="32">
                <use href="/sprite.svg#contactLocation" />
              </svg>
              <div>
                <div>
                  <p className="text-[18px] text-[#02142E]">
                    {contactsPage.contact_info.area_title}
                  </p>
                  <p className="font-semibold text-[18px] text-[#02142E]">
                    {contactsPage.contact_info.area_value}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  gap-6">
              <svg width="32" height="32">
                <use href="/sprite.svg#contactPhone" />
              </svg>
              <div>
                <p className="text-[18px] text-[#02142E]">
                  {contactsPage.contact_info.phone_title}
                </p>
                <a
                  href="tel:+380505926134"
                  className="font-semibold text-[18px] text-[#0B63E5]"
                >
                  {contactsPage.contact_info.phone_number}
                </a>
              </div>
            </div>
            <div className="flex  gap-6">
              <svg width="32" height="32" overflow="visible">
                <use href="/sprite.svg#contactEmail" />
              </svg>
              <div>
                <p className="text-[18px] text-[#02142E]">
                  {contactsPage.contact_info.email_title}
                </p>
                <a
                  href="mailto:cubefreestyle@gmail.com"
                  className="font-semibold text-[18px] text-[#0B63E5]"
                >
                  {contactsPage.contact_info.email}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 mt-[12px]">
              <a
                className="transition-transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/cubefreestyleteam"
              >
                <svg width="48" height="48" overflow="visible">
                  <use href="/sprite.svg#contactInstagram" />
                </svg>
              </a>
              <a
                href="https://t.me/alive_now"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105"
              >
                <svg
                  width="48"
                  height="48"
                  overflow="visible"
                  href="https://t.me/alive_now"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <use href="/sprite.svg#contactTelegram" />
                </svg>
              </a>
              <a
                href="https://connect.viber.com/business/fcceef18-9c6b-11f0-a222-46fc2ffa8d57"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105"
              >
                <svg width="48" height="48" overflow="visible">
                  <use href="/sprite.svg#contactViber" />
                </svg>
              </a>
            </div>
          </aside>

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
              {contactsPage.form.form_title}
            </h2>

            <form className="flex flex-col gap-[24px] w-full max-w-full sm:max-w-[512px]">
              {/* Имя + Телефон */}
              <div className="flex flex-col gap-[16px] w-full">
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="name"
                    className="text-[16px] font-medium text-[#02142E] mb-[6px]"
                  >
                    {contactsPage.form.name_label}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={contactsPage.form.name_placeholder}
                    className="h-[48px] border border-[#EDEDED] rounded-[5px] px-[16px] text-[18px] placeholder:text-[#838E9E] w-full"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="phone"
                    className="text-[16px] font-medium text-[#02142E] mb-[6px]"
                  >
                    {contactsPage.form.phone_label}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={contactsPage.form.phone_placeholder}
                    className="h-[48px] border border-[#EDEDED] rounded-[5px] px-[16px] text-[18px] placeholder:text-[#838E9E] w-full"
                  />
                </div>
              </div>

              {/* Селект услуг */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="service"
                  className="text-[16px] font-medium text-[#02142E] mb-[6px]"
                >
                  {contactsPage.form.service_label}
                </label>
                <select
                  id="service"
                  className="h-[48px] border border-[#EDEDED] rounded-[5px] px-[16px] text-[18px] text-[#02142E] placeholder:text-[#838E9E] w-full"
                >
                  <option>{contactsPage.form.service_placeholder}</option>
                  <option>Шоу на івент</option>
                  <option>Промо-активація</option>
                  <option>Навчання</option>
                </select>
              </div>

              {/* Текстовое сообщение */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor="message"
                  className="text-[16px] font-medium text-[#02142E] mb-[6px]"
                >
                  {contactsPage.form.message_label}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder={contactsPage.form.message_placeholder}
                  className="border border-[#EDEDED] rounded-[5px] px-[16px] py-[12px] text-[18px] placeholder:text-[#838E9E] w-full"
                />
              </div>

              {/* Кнопка */}
              <button
                type="submit"
                className="
      w-full sm:w-[218px] h-[56px] bg-[#0B63E5] text-white text-[18px] font-semibold rounded-[4px]
      shadow-[0px_4px_24px_rgba(10,63,143,0.3)] mx-auto cursor-pointer
    "
              >
                {contactsPage.form.button_text}
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
