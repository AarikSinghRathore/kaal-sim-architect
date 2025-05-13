
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-kaal-navy to-black">
      <div className="text-center max-w-md p-6">
        <div className="mb-8 flex justify-center">
          <div className="h-20 w-20 rounded-full bg-kaal-red/20 flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-kaal-red" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Access Restricted</p>
        <p className="text-muted-foreground mb-8">
          The requested resource requires proper authorization or does not exist.
          Project KAAL security protocols activated.
        </p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-kaal-green to-kaal-blue border-0">
            Return to Authorized Area
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
