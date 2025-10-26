interface CommandOutputProps {
  children: React.ReactNode;
  className?: string;
}

export function SuccessOutput({ children }: CommandOutputProps) {
  return <div className="text-green">{children}</div>;
}

export function ErrorOutput({ children }: CommandOutputProps) {
  return <div className="text-red">{children}</div>;
}

export function InfoOutput({ children }: CommandOutputProps) {
  return <div className="text-cyan">{children}</div>;
}

export function PrimaryOutput({ children }: CommandOutputProps) {
  return <div className="text-primary">{children}</div>;
}

export function BlueOutput({ children }: CommandOutputProps) {
  return <div className="text-blue">{children}</div>;
}
