export default function ContactForm({ services = [] }) {
  return (
    <section
      className="relative flex flex-col items-center justify-center 
  py-12 lg:py-16 px-4 lg:px-[131px] xl:px-[339px] w-full 
  bg-[url('/BackgroundForm.svg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Контейнер формы */}
      <form
        method="post"
        action="/api/contact"
        className="flex flex-col gap-6 w-full max-w-[343px] lg:max-w-[762px]"
      >
        {/* honeypot */}
        <input
          type="text"
          name="hp"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="gap-6 flex flex-col lg:flex-row">
          {/* Имя */}
          <label className="flex flex-col text-left flex-1">
            <span className="block text-white/90 mb-1">Ім’я*</span>
            <input
              name="name"
              required
              minLength={2}
              placeholder="Введіть ім’я"
              className="w-full rounded-md bg-white/10 text-white px-4 py-3 ring-1 ring-white/20 focus:ring-2"
            />
          </label>

          {/* Телефон */}
          <label className="flex flex-col text-left flex-1">
            <span className="block text-white/90 mb-1">Телефон*</span>
            <input
              name="phone"
              required
              inputMode="tel"
              placeholder="+380..."
              pattern="^\\+?\\d[\\d\\s()-]{7,}$"
              className="w-full rounded-md bg-white/10 text-white px-4 py-3 ring-1 ring-white/20 focus:ring-2"
            />
          </label>
        </div>

        {/* Сервис */}
        <label className="flex flex-col text-left">
          <span className="block text-white/90 mb-1">Оберіть послугу*</span>
          <select
            name="service"
            required
            className="w-full rounded-md bg-white/10 text-white px-4 py-3 ring-1 ring-white/20 focus:ring-2"
          >
            <option value="">Оберіть послугу</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>

        {/* Сообщение */}
        <label className="flex flex-col text-left">
          <span className="block text-white/90 mb-1">Повідомлення</span>
          <textarea
            name="message"
            rows="4"
            placeholder="Напишіть нам повідомлення (необов’язково)"
            className="w-full rounded-md bg-white/10 text-white px-4 py-3 ring-1 ring-white/20 focus:ring-2 resize-none"
          />
        </label>

        {/* Кнопка */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-md bg-white text-blue-700 font-medium px-5 py-2 shadow hover:shadow-md transition"
          >
            Відправити
          </button>
        </div>
      </form>
    </section>
  );
}
