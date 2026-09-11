
import styles from './TechMarquee.module.css';
import angularIconPath from '@/assets/icons/svgs/angular.svg';
import awsIconPath from '@/assets/icons/svgs/aws.svg';
import cppIconPath from '@/assets/icons/svgs/cpp.svg';
import csharpIconPath from '@/assets/icons/svgs/csharp.svg';
import dockerIconPath from '@/assets/icons/svgs/docker.svg';
import flutterIconPath from '@/assets/icons/svgs/flutter.svg';
import gcpIconPath from '@/assets/icons/svgs/gcp.svg';
import javaIconPath from '@/assets/icons/svgs/java.svg';
import nginxIconPath from '@/assets/icons/svgs/nginx.svg';
import linuxIconPath from '@/assets/icons/svgs/linux.svg';
import nodejsIconPath from '@/assets/icons/svgs/nodejs.svg';
import postgresIconPath from '@/assets/icons/svgs/postgres.svg';
import pythonIconPath from '@/assets/icons/svgs/python.svg';
import reactIconPath from '@/assets/icons/svgs/react.svg';
import rustIconPath from '@/assets/icons/svgs/rust.svg';
import springbootIconPath from '@/assets/icons/svgs/springboot.svg';
import typescriptIconPath from '@/assets/icons/svgs/typescript.svg';

const TECH_ITEMS_LIST = [
    { name: 'Typescript', icon: <img src={typescriptIconPath} alt="" /> },
    { name: 'Java', icon: <img src={javaIconPath} alt="" /> },
    { name: 'Rust', icon: <img src={rustIconPath} alt="" /> },
    { name: 'C++', icon: <img src={cppIconPath} alt="" /> },
    { name: 'C#', icon: <img src={csharpIconPath} alt="" /> },
    { name: 'Python', icon: <img src={pythonIconPath} alt="" /> },
    { name: 'Flutter', icon: <img src={flutterIconPath} alt="" /> },
    { name: 'NodeJs', icon: <img src={nodejsIconPath} alt="" /> },
    { name: 'React', icon: <img src={reactIconPath} alt="" /> },
    { name: 'Angular', icon: <img src={angularIconPath} alt="" /> },
    { name: 'Spring Boot', icon: <img src={springbootIconPath} alt="" /> },
    { name: 'Amazon Web Services', icon: <img src={awsIconPath} alt="" /> },
    { name: 'Google Cloud Platform', icon: <img src={gcpIconPath} alt="" /> },
    { name: 'Docker', icon: <img src={dockerIconPath} alt="" /> },
    { name: 'NginX', icon: <img src={nginxIconPath} alt="" /> },
    { name: 'Linux', icon: <img src={linuxIconPath} alt="" /> },
    { name: 'Postgres', icon: <img src={postgresIconPath} alt="" /> },
];

const minItems = 12;
const multiplier = Math.max(1, Math.ceil(minItems / TECH_ITEMS_LIST.length));

const SAFE_ITEMS = new Array(multiplier)
    .fill(TECH_ITEMS_LIST)
    .flat()
    .map((item) => ({
        ...item,
        id: crypto.randomUUID()
    }));

export default function TechMarquee() {
    return (
        <div className={styles.marqueeContainer}>
            <ul className={styles.srList}>
                {TECH_ITEMS_LIST.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>

            <div className={styles.rail} aria-hidden="true">
                <div className={styles.group}>
                    {SAFE_ITEMS.map((item) => (
                        <div
                            key={`g1-${item.id}`}
                            className={styles.chip}
                            style={{ '--hover-color': item.color || '#57534e' } as React.CSSProperties}
                        >
                            <div className={styles.tile}>{item.icon}</div>
                            {item.name}
                        </div>
                    ))}
                </div>

                <div className={styles.group}>
                    {SAFE_ITEMS.map((item) => (
                        <div
                            key={`g2-${item.id}`}
                            className={styles.chip}
                            style={{ '--hover-color': item.color || '#57534e' } as React.CSSProperties}
                        >
                            <div className={styles.tile}>{item.icon}</div>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}