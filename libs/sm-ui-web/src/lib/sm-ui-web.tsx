import styles from './sm-ui-web.module.scss';

/* eslint-disable-next-line */
export interface SmUiWebProps {}

export function SmUiWeb(props: SmUiWebProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SmUiWeb!</h1>
    </div>
  );
}

export default SmUiWeb;
