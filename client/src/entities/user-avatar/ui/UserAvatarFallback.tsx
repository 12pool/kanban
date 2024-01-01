export const UserAvatarFallback = ({ className }: { className?: string }) => {
  return (
    <img
      className={className}
      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      alt=""
    />
  );
};
