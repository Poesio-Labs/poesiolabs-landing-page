import { Icon } from "@/components/ui/Icon";

export type ContactChannel = {
  title: string;
  body: string;
  email: string;
  href: string;
};

export function ContactCards({ channels }: { channels: ContactChannel[] }) {
  return (
    <ul className="contact-grid">
      {channels.map((channel, i) => (
        <li key={channel.email}>
          <article className={`info-card contact-card ${i === 0 ? "contact-card--primary" : ""}`}>
            <span className="info-card__icon" aria-hidden="true">
              <Icon name="mail" size={24} />
            </span>
            <h3 className="info-card__title">{channel.title}</h3>
            <p className="info-card__body">{channel.body}</p>
            <a className="contact-card__email" href={channel.href}>
              {channel.email}
            </a>
          </article>
        </li>
      ))}
    </ul>
  );
}
