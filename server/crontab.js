import { exec } from 'child_process';
import { password } from './secret.js';
import moment from 'moment';

let timestamp;

const crontab = () => {
    timestamp = setTimeout(() => {
        clearTimeout(timestamp);
        const hour = new Date().getHours();
        if (hour === 4) {
            bakSQL();
        }

        crontab();
    }, 60 * 60 * 1000);
}

const bakSQL = () => {
    const date = moment().format('MMDD');
    exec(`mysqldump --no-defaults -uroot -p${password} petgame> /home/vajoy/bak/petgame${date}.sql`, (error, stdout, stderr) => {
        if (error) {
          console.error(`[crontab error]: ${error}`);
          return;
        }
      });
}

crontab();