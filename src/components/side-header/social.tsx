import { BsLinkedin, BsGithub, BsWechat } from "react-icons/bs";

export default function Social() {
  return (
    <div>
      <ul className="flex justify-start space-x-16">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rdjebrouni/"
            className="hover:text-neutral-100"
          >
            <BsLinkedin size="24px" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/rydje"
            className="hover:text-neutral-100"
          >
            <BsGithub size="24px" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="weixin://dl/chat?ryanv77"
            className="hover:text-neutral-100"
          >
            <BsWechat size="24px" />
          </a>
        </li>
      </ul>
    </div>
  );
}
