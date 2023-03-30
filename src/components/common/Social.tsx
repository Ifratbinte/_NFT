
import social from "#mocks/footer.json"
const SocialIcon = () => {
  const icon = social.footer.icons
console.log({icon});

  return (
    <ul className="flex justify-center lg:justify-left">
      {icon.map((icon: any, i: number) => {
        return (
          <li className="pr-3" key={i}>
            <a href={icon.path} className="text-slate-50 xl:text-xl">
              <img src={icon.icon} alt="" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcon;
