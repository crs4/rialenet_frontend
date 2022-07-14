import { useSelector } from 'react-redux';
import { Button, Spinner, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';

import { selectors as UserTasksSelectors } from '../store/slices/userTasks'
import { useTranslation } from 'react-i18next';
import { IT, GB } from 'country-flag-icons/react/3x2'
import i18n from '../i18n';
//https://reactstrap.github.io/?path=/story/home-installation--page

export const LanguageSelector = (props: any) => {
  return <div style={{ "display": "flex", "justifyContent": "center" , "margin":"10px" }}>
    <div style={{"display": "flex", "justifyContent": "flex-start", "alignItems": "center" }}>
      <GB style={{"cursor" : "pointer", "marginRight": "10px" }} width="30px" title="English" 
      onClick={() => { 
        localStorage.setItem("rialenet_language" ,'en-US');
        i18n.changeLanguage('en-US'); }} />
      <IT style={{"cursor" : "pointer", "marginRight": "10px" }} width="30px" title="Italiano" 
      onClick={() => { 
        localStorage.setItem("rialenet_language" ,'it-IT');
        i18n.changeLanguage('it-IT'); }}/>
    </div>

  </div>

}

export const ActivityButton = ({ name, disabled, children, ...rest }: any) => {

  //const isActivityRunning = useSelector(state => UISelectors.activityRunningSelector(state, name));
  const isActivityRunning = useSelector(UserTasksSelectors.isSendingMessage);
  return (
    <>
      {
        isActivityRunning ? (
          < Button disabled {...rest}>{children}  <Spinner size="sm" color="light" /></Button >
        ) : (
          < Button disabled={disabled} {...rest}>{children}</Button >
        )
      }
    </>
  )
}


export const AppLoader = (props: any) => {
  const { t, i18n } = useTranslation('frontend', { useSuspense: false });
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <Card className="mb-4" style={{ borderColor: "#007bff" }}>
        <CardHeader style={{
          backgroundColor: "#007bff",
          borderColor: "#007bff",
          paddingBottom: 0,
          color: 'white'

        }}>
          <CardTitle style={{ textAlign: "center" }}>{t("platform_title")}</CardTitle>
        </CardHeader>
        <CardBody>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Spinner style={{ margin: "20px" }} color="primary" />
          </div>
        </CardBody>
      </Card>


    </div>
  );

}