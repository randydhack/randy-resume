import { useHistory } from "react-router-dom";

function PageRedirect() {

    const history = useHistory()

    return history.goBack()
}

export default PageRedirect;
