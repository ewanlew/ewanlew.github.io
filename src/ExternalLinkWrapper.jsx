import { FaExternalLinkAlt } from "react-icons/fa";

function ExternalLinkWrapper({ href, children, ...props }) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
      {isExternal && <FaExternalLinkAlt className="external-icon" />}
    </a>
  );
}

export default ExternalLinkWrapper;
