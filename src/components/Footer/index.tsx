import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'Adonis作品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'User Center',
          title: '用户中心',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'github',
          // eslint-disable-next-line react/no-unescaped-entities
          title: <><GithubOutlined/> Adonis' GitHub</>,
          href: 'https://github.com/niceM4ch1n3',
          blankTarget: true,
        },
        {
          key: 'Index',
          title: '个人主页',
          href: '#',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
