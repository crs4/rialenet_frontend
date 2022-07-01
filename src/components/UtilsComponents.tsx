import { useSelector } from 'react-redux';
import { Button, Spinner, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';

import { selectors as UserTasksSelectors } from '../store/slices/userTasks'
import { useTranslation } from 'react-i18next';

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
          <Spinner size="sm" color="light" />
        </CardBody>
      </Card>


    </div>
  );

}