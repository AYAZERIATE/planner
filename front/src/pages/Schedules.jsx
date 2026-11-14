import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewWeek, createViewMonthGrid } from "@schedule-x/calendar";
import "temporal-polyfill/global";
import "@schedule-x/theme-default/dist/index.css";

function Schedules() {
    const calendar = useCalendarApp({
        views: [createViewMonthGrid(), createViewWeek()],
        events: [
            {
                id: "1",
                title: "My Examen",
                start: Temporal.PlainDate.from("2026-12-01"),
                end: Temporal.PlainDate.from("2026-12-11"),
            },
        ],
        selectedDate: Temporal.PlainDate.from("2026-12-01"),
    });

    return (
        <div className="schedules-page">
            <style>{`
                .schedules-page {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    min-height: 100vh;
                    padding: 40px 16px 72px;
                    text-align: center;
                    font-family: "Inter", "Segoe UI", Arial, sans-serif;
                    color: #111;
                    box-sizing: border-box;
                    background-color: #fffdf7;
                    background-image: radial-gradient(#d9d4c3 1.2px, transparent 1.2px);
                    background-size: 22px 22px;
                }

                .schedules-page h1 {
                    position: relative;
                    z-index: 0;
                    display: inline-block;
                    margin: 0 0 36px;
                    font-size: 46px;
                    font-weight: 800;
                    letter-spacing: -1.5px;
                }

                .schedules-page h1::after {
                    content: "";
                    position: absolute;
                    left: -10px;
                    right: -10px;
                    bottom: 4px;
                    height: 18px;
                    background: linear-gradient(90deg, #ffd6d6, #fff3b0, #d6e9ff);
                    border-radius: 6px;
                    transform: rotate(-1.5deg);
                    z-index: -1;
                }

                .schedules-page h1::before {
                    content: "✏️";
                    position: absolute;
                    top: -18px;
                    right: -38px;
                    font-size: 28px;
                    transform: rotate(18deg);
                    animation: wiggle 2.4s ease-in-out infinite;
                }

                /* cadre dyal calendrier */
                .calendar-box {
                    width: 100%;
                    max-width: 1000px;
                    padding: 12px;
                    background: #fffef9;
                    border: 2px solid #111;
                    border-radius: 14px;
                    box-shadow: 8px 8px 0 #111;
                    box-sizing: border-box;
                    text-align: left;
                }

                .calendar-box .sx-react-calendar-wrapper {
                    width: 100%;
                    height: 680px;
                    max-height: 75vh;
                }

                /* alwan dyal Schedule-X = palette dyal Courses */
                .calendar-box .sx__calendar-wrapper {
                    --sx-color-primary: #111;
                    --sx-color-on-primary: #fff;
                    --sx-color-primary-container: #ffd84d;
                    --sx-color-on-primary-container: #111;
                    --sx-color-surface: #fffef9;
                    --sx-color-surface-dim: #f5efdc;
                    --sx-color-surface-bright: #fffef9;
                    --sx-color-on-surface: #111;
                    --sx-color-background: #fffef9;
                    --sx-color-outline: #111;
                    --sx-color-outline-variant: #d9d4c3;
                    --sx-color-neutral: #888;
                    --sx-color-surface-container: #fff3b0;
                    --sx-color-surface-container-low: #fffef9;
                    --sx-color-surface-container-high: #ffd6d6;
                    --sx-color-surface-container-highest: #d6e9ff;
                    font-family: inherit;
                    border: none;
                }

                @keyframes wiggle {
                    0%, 100% { transform: rotate(18deg); }
                    50% { transform: rotate(-4deg) translateY(-3px); }
                }

                @media (max-width: 560px) {
                    .schedules-page h1 { font-size: 34px; }
                    .schedules-page h1::before { right: -30px; font-size: 22px; }
                    .calendar-box { padding: 6px; box-shadow: 5px 5px 0 #111; }
                }
            `}</style>

            <h1>Schedules</h1>

            <div className="calendar-box">
                <ScheduleXCalendar calendarApp={calendar} />
            </div>
        </div>
    );
}

export default Schedules;