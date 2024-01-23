import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();

  // TEMPORARY SOLUTION TO REDIRECT TO TEAM PAGE
  // we will display here the list of teams

  useEffect(() => {
    void navigate({
      to: '/team/$teamName',
      params: { teamName: 'test-team' },
      search: (prev) => prev,
    });
  }, [navigate]);

  return <div>home</div>;
};
