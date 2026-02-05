export function TerminalError() {
  return (
    <div className="h-full w-full bg-zinc-950 p-6 font-mono text-sm overflow-auto">
      <div className="space-y-2">
        <div className="text-zinc-400">$ python setup_agent.py</div>
        <div className="text-red-500">
          ERROR: Could not find a version that satisfies the requirement
          anthropic==0.25.0
        </div>
        <div className="text-zinc-400">$ pip install anthropic</div>
        <div className="text-red-500">
          ERROR: pip's dependency resolver does not currently take into account
          all the packages
        </div>
        <div className="text-zinc-400">$ export ANTHROPIC_API_KEY=...</div>
        <div className="text-red-500">
          ERROR: API key not found. Please set ANTHROPIC_API_KEY environment
          variable
        </div>
        <div className="text-zinc-400">$ npm install playwright</div>
        <div className="text-red-500">ERROR: EACCES: permission denied</div>
        <div className="text-zinc-400">$ sudo npm install playwright</div>
        <div className="text-yellow-500">
          WARNING: Running as root is not recommended
        </div>
        <div className="text-red-500">
          ERROR: Failed to install browsers. Run with --force
        </div>
        <div className="text-zinc-400">$ playwright install chromium</div>
        <div className="text-red-500">
          ERROR: browserType.launch: Executable doesn't exist
        </div>
        <div className="text-zinc-400">$ python agent.py</div>
        <div className="text-red-500">
          ModuleNotFoundError: No module named 'selenium'
        </div>
        <div className="text-zinc-400">$ pip install selenium</div>
        <div className="text-red-500">
          ERROR: Could not build wheels for cryptography
        </div>
        <div className="text-zinc-400">$ brew install rust</div>
        <div className="text-yellow-500">
          WARNING: You have 47 outdated formulae installed
        </div>
        <div className="text-red-500">ERROR: Build failed with exit code 1</div>
        <div className="text-zinc-400 animate-pulse">▊</div>
      </div>
    </div>
  );
}
