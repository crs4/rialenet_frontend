import { useSelector } from 'react-redux';
import { Button, Spinner } from 'reactstrap';

import { selectors as UserTasksSelectors } from '../store/slices/userTasks'

export const ActivityButton = ({name, disabled, children, ...rest}: any) => {

  //const isActivityRunning = useSelector(state => UISelectors.activityRunningSelector(state, name));
  const isActivityRunning = useSelector(UserTasksSelectors.isSendingMessage);
  return (
    <>
    {
      isActivityRunning ?(
        < Button disabled {...rest}>{children}  <Spinner size = "sm" color = "light" /></Button >
      ): (
        < Button disabled={disabled} {...rest}>{children}</Button >
        )
    }
    </>
  )
}