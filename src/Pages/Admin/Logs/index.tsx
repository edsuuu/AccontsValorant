// src/components/LogsTable.tsx
import React, { useEffect, useState } from 'react';
import API_URL from '../../../services/axios';

interface LogEntry {
    timestamp: string;
    level: string;
    message: string;
    ip: string;
}

const LogsTable: React.FC = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);

    useEffect(() => {
        async function getLogs() {
            try {
                const response = await API_URL.get('/admin/logs'); // Substitua 'API_URL' pela URL real da sua API
                const logsData = response.data;
                console.log(logsData);

                const formattedLogs: LogEntry[] = [];

                // Processa cada entrada de log
                logsData.forEach((logData: { content: string }) => {
                    const lines = logData.content.split('\n');
                    lines.forEach((line: string) => {
                        if (line.trim()) {
                            const parts = line.split(' ');
                            if (parts.length >= 4) {
                                // Certifique-se de que há partes suficientes para processar
                                const timestamp = new Date(parts[0]).toLocaleString();
                                const level = parts[1].replace(':', '');
                                const message = parts.slice(2, parts.length - 2).join(' ');
                                const ip = parts[parts.length - 1].replace('IP:', '').trim();
                                formattedLogs.push({ timestamp, level, message, ip });
                            }
                        }
                    });
                });
                formattedLogs.reverse();
                setLogs(formattedLogs);
            } catch (e) {
                console.log(e);
            }
        }

        getLogs();
    }, []);

    return (
        <div>
            <h1>Log Viewer</h1>
            <table>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Level</th>
                        <th>Message</th>
                        <th>IP</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => (
                        <tr key={index}>
                            <td>{log.timestamp}</td>
                            <td>{log.level}</td>
                            <td>{log.message}</td>
                            <td>{log.ip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LogsTable;
