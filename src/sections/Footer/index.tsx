export const Footer = () => {
  return (
    <div className="box-border caret-transparent blur-0">
      <footer className="box-border caret-transparent flex justify-center mt-24 mb-8">
        <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
          <a
            href="https://cs.uwatering.com/#https://freemanjiang.com?nav=prev"
            className="box-border caret-transparent block -scale-100"
          >
            ➵
          </a>
          <a
            href="https://cs.uwatering.com/#https://freemanjiang.com"
            className="box-border caret-transparent block"
          >
            <img
              alt="CS Webring"
              src="https://c.animaapp.com/mj6gbb47AD7Gg1/assets/icon.black.svg"
              className="text-transparent aspect-[auto_24_/_24] box-border h-6 max-w-full opacity-80 w-6"
            />
          </a>
          <a
            href="https://cs.uwatering.com/#https://freemanjiang.com?nav=next"
            className="box-border caret-transparent block"
          >
            ➵
          </a>
        </div>
      </footer>
    </div>
  );
};
