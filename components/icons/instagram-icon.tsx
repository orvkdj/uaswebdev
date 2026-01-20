import * as React from "react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement> | undefined) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      className="icon icon-tabler mb-4 icons-tabler-filled icon-tabler-brand-instagram"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm5 5a5 5 0 1 0 0 10a5 5 0 0 0 0 -10zm6.5 -.5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm-6.5 2.5a3 3 0 1 1 0 6a3 3 0 0 1 0 -6z" />
    </svg>
  );
}

export default InstagramIcon;
