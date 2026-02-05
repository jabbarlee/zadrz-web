export function TerminalError() {
  return (
    <div className="h-full w-full bg-zinc-950 p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm overflow-auto">
      <div className="space-y-1.5 sm:space-y-2">
        <div className="text-zinc-400 break-all">$ python setup_agent.py</div>
        <div className="text-red-500 break-words">
          ERROR: Could not find a version that satisfies the requirement
          anthropic==0.25.0
        </div>
        <div className="text-zinc-400 break-all">$ pip install anthropic</div>
        <div className="text-red-500 break-words">
          ERROR: pip's dependency resolver does not currently take into account
          all the packages
        </div>
        <div className="text-zinc-400 break-all">
          $ export ANTHROPIC_API_KEY=...
        </div>
        <div className="text-red-500 break-words">
          ERROR: API key not found. Please set ANTHROPIC_API_KEY environment
          variable
        </div>
        <div className="text-zinc-400 break-all">$ npm install playwright</div>
        <div className="text-red-500 break-words">
          ERROR: EACCES: permission denied
        </div>
        <div className="text-zinc-400 break-all">
          $ sudo npm install playwright
        </div>
        <div className="text-yellow-500 break-words">
          WARNING: Running as root is not recommended
        </div>
        <div className="text-red-500 break-words">
          ERROR: Failed to install browsers. Run with --force
        </div>
        <div className="text-zinc-400 break-all">
          $ playwright install chromium
        </div>
        <div className="text-red-500 break-words">
          ERROR: browserType.launch: Executable doesn't exist
        </div>
        <div className="text-zinc-400 break-all">$ python agent.py</div>
        <div className="text-red-500 break-words">
          ModuleNotFoundError: No module named 'selenium'
        </div>
        <div className="text-zinc-400 break-all">$ pip install selenium</div>
        <div className="text-red-500 break-words">
          ERROR: Could not build wheels for cryptography
        </div>
        <div className="text-zinc-400 break-all">$ brew install rust</div>
        <div className="text-yellow-500 break-words">
          WARNING: You have 47 outdated formulae installed
        </div>
        <div className="text-red-500 break-words">
          ERROR: Build failed with exit code 1
        </div>
        <div className="text-zinc-400 animate-pulse">▊</div>
      </div>
    </div>
  );
}
