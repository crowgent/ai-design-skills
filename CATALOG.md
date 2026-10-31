<div align="center">
  <p><sub>FORMA · RESEARCH COMPANION · SNAPSHOT 28 OCT 2026</sub></p>
  <h1>Agent &amp; Model Field Guide</h1>
  <p><strong>Find the right install path, support surface, or public model family.</strong></p>
  <p>A source-linked reference for skill distribution, agent capability boundaries, downloadable models, and checkpoint-specific terms.</p>
  <p>
    <a href="#install-targets">Install targets</a> &nbsp;·&nbsp;
    <a href="#beyond-the-skills-cli-related-products">Related products</a> &nbsp;·&nbsp;
    <a href="#public-model-families">Model families</a> &nbsp;·&nbsp;
    <a href="#scope-and-update-notes">Scope &amp; refresh</a>
  </p>
</div>

---

### At a glance

<table>
  <tr>
    <td align="center"><strong>77</strong><br><sub>Skills CLI identifiers</sub></td>
    <td align="center"><strong>65</strong><br><sub>Installer product rows</sub></td>
    <td align="center"><strong>50 / 53</strong><br><sub>Model families / category entries</sub></td>
  </tr>
</table>

> **Snapshot, not a promise.** Counts describe sources reviewed on 28 October 2026. Listing an installer target or product does not mean Forma has been tested there. Model access, capabilities, names, and licenses can change; verify the linked source before use.

### Choose a section

| If you need to… | Start here |
|---|---|
| Install Forma into an agent | [Install targets](#install-targets) |
| Distinguish native skills from adjacent instruction features | [Related products](#beyond-the-skills-cli-related-products) |
| Compare downloadable models by modality | [Public model families](#public-model-families) |
| Check what the dated Hub trending sample showed | [Trending snapshot](#live-trending-snapshot) |
| Understand counts, exclusions, and refresh needs | [Scope & update notes](#scope-and-update-notes) |

---

## Install targets

The maintained Skills CLI matrix lists **77 distinct `--agent` identifiers across 65 product rows**. This means the installer documents a skills-directory target for those identifiers. It does **not** mean every agent has been independently tested here, accepts every optional `SKILL.md` feature, or will invoke a skill correctly in every task. The source matrix notes that feature support varies. Recheck the upstream matrix before relying on a particular target.

Install options are documented by the [Skills CLI command reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md). The full target list and paths below are taken from its [maintained agent matrix](https://github.com/vercel-labs/skills/blob/main/docs/agents.md).

<details>
<summary>Browse all 65 product rows and 77 installer identifiers</summary>

| Agent / product row | Installer ID(s) | Project skills path | User-level skills path |
|---|---|---|---|
| AiderDesk | `aider-desk` | `.aider-desk/skills/` | `~/.aider-desk/skills/` |
| Amp, Replit, Universal | `amp`, `replit`, `universal` | `.agents/skills/` | `~/.config/agents/skills/` |
| Antigravity | `antigravity` | `.agents/skills/` | `~/.gemini/antigravity/skills/` |
| Antigravity CLI | `antigravity-cli` | `.agents/skills/` | `~/.gemini/antigravity-cli/skills/` |
| AstrBot | `astrbot` | `data/skills/` | `~/.astrbot/data/skills/` |
| Autohand Code CLI | `autohand-code` | `.autohand/skills/` | `~/.autohand/skills/` |
| Augment | `augment` | `.augment/skills/` | `~/.augment/skills/` |
| IBM Bob | `bob` | `.bob/skills/` | `~/.bob/skills/` |
| Claude Code | `claude-code` | `.claude/skills/` | `~/.claude/skills/` |
| OpenClaw | `openclaw` | `skills/` | `~/.openclaw/skills/` |
| Cline, Codex, Dexto, fx, Kimi Code CLI, Loaf, Pi, Sarvam Code, Warp, Zed | `cline`, `codex`, `dexto`, `fx`, `kimi-code-cli`, `loaf`, `pi`, `sarvam-code`, `warp`, `zed` | `.agents/skills/` | `~/.agents/skills/` |
| CodeBuddy | `codebuddy` | `.codebuddy/skills/` | `~/.codebuddy/skills/` |
| Codemaker | `codemaker` | `.codemaker/skills/` | `~/.codemaker/skills/` |
| Code Studio | `codestudio` | `.codestudio/skills/` | `~/.codestudio/skills/` |
| Command Code | `command-code` | `.commandcode/skills/` | `~/.commandcode/skills/` |
| Continue | `continue` | `.continue/skills/` | `~/.continue/skills/` |
| Cortex Code | `cortex` | `.cortex/skills/` | `~/.snowflake/cortex/skills/` |
| Crush | `crush` | `.crush/skills/` | `~/.config/crush/skills/` |
| Cursor | `cursor` | `.agents/skills/` | `~/.cursor/skills/` |
| Deep Agents | `deepagents` | `.agents/skills/` | `~/.deepagents/agent/skills/` |
| Devin for Terminal | `devin` | `.devin/skills/` | `~/.config/devin/skills/` |
| Droid | `droid` | `.agents/skills/` | `~/.factory/skills/` |
| Eve | `eve` | `agent/skills/` | N/A (project-only) |
| Firebender | `firebender` | `.agents/skills/` | `~/.firebender/skills/` |
| ForgeCode | `forgecode` | `.forge/skills/` | `~/.forge/skills/` |
| Gemini CLI | `gemini-cli` | `.agents/skills/` | `~/.gemini/skills/` |
| GitHub Copilot | `github-copilot` | `.agents/skills/` | `~/.copilot/skills/` |
| Goose | `goose` | `.goose/skills/` | `~/.config/goose/skills/` |
| Grok Build | `grok` | `.grok/skills/` | `~/.grok/skills/` |
| inference.sh | `inference-sh` | `.inferencesh/skills/` | `~/.inferencesh/skills/` |
| Jazz | `jazz` | `.jazz/skills/` | `~/.jazz/skills/` |
| Junie | `junie` | `.junie/skills/` | `~/.junie/skills/` |
| iFlow CLI | `iflow-cli` | `.iflow/skills/` | `~/.iflow/skills/` |
| Kilo Code | `kilo` | `.agents/skills/` | `~/.kilo/skills/` |
| Kimchi | `kimchi` | `.kimchi/skills/` | `~/.config/kimchi/harness/skills/` |
| Kiro CLI | `kiro-cli` | `.kiro/skills/` | `~/.kiro/skills/` |
| Kode | `kode` | `.kode/skills/` | `~/.kode/skills/` |
| Lingma | `lingma` | `.lingma/skills/` | `~/.lingma/skills/` |
| MCPJam | `mcpjam` | `.mcpjam/skills/` | `~/.mcpjam/skills/` |
| MiniMax Code | `minimax-code` | `.minimax/skills/` | `~/.minimax/skills/` |
| Mistral Vibe | `mistral-vibe` | `.vibe/skills/` | `~/.vibe/skills/` |
| Moxby | `moxby` | `.moxby/skills/` | `~/.moxby/skills/` |
| Mux | `mux` | `.mux/skills/` | `~/.mux/skills/` |
| OpenCode | `opencode` | `.agents/skills/` | `~/.config/opencode/skills/` |
| OpenHands | `openhands` | `.openhands/skills/` | `~/.openhands/skills/` |
| Ona | `ona` | `.ona/skills/` | `~/.ona/skills/` |
| Posit Assistant | `posit-assistant` | `.posit/assistant/skills/` | `~/.posit/assistant/skills/` |
| Qoder | `qoder` | `.qoder/skills/` | `~/.qoder/skills/` |
| Qoder CN | `qoder-cn` | `.qoder/skills/` | `~/.qoder-cn/skills/` |
| Qwen Code | `qwen-code` | `.qwen/skills/` | `~/.qwen/skills/` |
| Reasonix | `reasonix` | `.reasonix/skills/` | `~/.reasonix/skills/` |
| Rovo Dev | `rovodev` | `.rovodev/skills/` | `~/.rovodev/skills/` |
| Roo Code | `roo` | `.roo/skills/` | `~/.roo/skills/` |
| Tabnine CLI | `tabnine-cli` | `.tabnine/agent/skills/` | `~/.tabnine/agent/skills/` |
| Terramind | `terramind` | `.terramind/skills/` | `~/.terramind/skills/` |
| Tinycloud | `tinycloud` | `.tinycloud/skills/` | `~/.tinycloud/skills/` |
| Trae | `trae` | `.trae/skills/` | `~/.trae/skills/` |
| Trae CN | `trae-cn` | `.trae/skills/` | `~/.trae-cn/skills/` |
| Windsurf | `windsurf` | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` |
| ZCode | `zcode` | `.zcode/skills/` | `~/.zcode/skills/` |
| Zencoder, Zenflow | `zencoder`, `zenflow` | `.zencoder/skills/` | `~/.zencoder/skills/` |
| Neovate | `neovate` | `.neovate/skills/` | `~/.neovate/skills/` |
| Pochi | `pochi` | `.pochi/skills/` | `~/.pochi/skills/` |
| PromptScript | `promptscript` | `.agents/skills/` | N/A (project-only) |
| AdaL | `adal` | `.adal/skills/` | `~/.adal/skills/` |

</details>

### Beyond the Skills CLI: related products

These are separately documented products found in this research. Some provide native `SKILL.md` support; others save project instructions, custom bots, or framework modules. They are **not automatically included in the Skills CLI count**, and an adjacent instruction mechanism is not the same as portable skill-folder support. The entries below are representative, not a complete market census.

#### IDE and editor agents

<details>
<summary>Browse IDE and editor agents</summary>

- **GitHub Copilot agent mode in Visual Studio Code** — GitHub Copilot's agent mode within VS Code, which can use task-specific instructions and resources while editing a local workspace. Support: Native Agent Skills support. [source 1](https://code.visualstudio.com/docs/agent-customization/agent-skills) · [source 2](https://docs.github.com/en/copilot/concepts/customizations/agent-skills).
- **Cursor Agent** — AI-native code editor with agent workflows, local project context, and file editing tools. Support: Native Agent Skills support, automatic discovery and optional `/skill` invocation. [source 1](https://cursor.com/docs/skills) · [source 2](https://github.com/cursor/cursor).
- **Zed Agent** — Native AI coding agent integrated into the Zed code editor, with reviewable edits and configurable models/tools. Support: Native skills for the Zed Agent only. [source 1](https://zed.dev/docs/ai/skills) · [source 2](https://zed.dev/docs/ai/zed-agent).
- **JetBrains Junie (IDE integration)** — JetBrains' task-oriented coding agent available in JetBrains IDEs; the IDE integration can use reusable, task-specific skill packages. Support: Native Agent Skills. [source 1](https://junie.jetbrains.com/docs/agent-skills.html) · [source 2](https://github.com/JetBrains/junie).
- **Cline** — Open-source coding agent available as an IDE extension, including VS Code and JetBrains integrations, with user-approved tools and support for multiple model providers. Support: Native skills in the Cline agent. [source 1](https://docs.cline.bot/features/skills) · [source 2](https://github.com/cline/cline).
- **Windsurf Cascade in Devin Desktop (Windsurf editor lineage)** — Cascade is the agent experience associated with Windsurf's code-editor product lineage; the currently served vendor documentation presents skills under Devin Desktop/Cascade, so branded product and path changes should be noted when applying instructions to older Windsurf installations. Support: Native skills documented for Cascade. [source 1](https://docs.windsurf.com/desktop/cascade/skills) · [source 2](https://docs.windsurf.com/desktop/cascade/cascade).

</details>

#### Terminal agents and coding tools

<details>
<summary>Browse terminal agents and coding tools</summary>

- **Claude Code** — Anthropic's terminal-based agentic coding tool for understanding and modifying codebases and running routine workflows. Support: Explicit native skills: each skill has SKILL.md; project `.claude/skills/<name>/SKILL.md`, personal `~/.claude/skills/<name>/SKILL.md`, plus nested, managed, plugin and `--add-dir` paths are documented. [source 1](https://code.claude.com/docs/en/skills) · [source 2](https://code.claude.com/docs/en/memory).
- **OpenAI Codex CLI** — OpenAI's local coding agent that runs in a terminal; its official documentation specifies reusable skills and layered project instructions. Support: Explicit native Agent Skills: `SKILL.md` directories discovered under repository `.agents/skills` (from CWD through repository root), `~/.agents/skills`, `/etc/codex/skills`, plus system skills; install curated skills with `$skill-installer <name>`. [source 1](https://developers.openai.com/codex/skills) · [source 2](https://developers.openai.com/codex/guides/agents-md).
- **Gemini CLI** — Google's open-source terminal AI agent, with documented project context files and Agent Skills support. Support: Explicit Agent Skills support: discovers `~/.gemini/skills/` or `~/.agents/skills/` and workspace `.gemini/skills/` or `.agents/skills/`; CLI supports `gemini skills install <repo-or-local-dir>`, `--scope user|workspace`, and `--path`. [source 1](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/skills.md) · [source 2](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/gemini-md.md).
- **GitHub Copilot CLI** — GitHub Copilot's interactive terminal coding agent with repository instructions, path-specific guidance and reusable skill bundles. Support: Explicit skills: create project skill folders in `.github/skills`, `.claude/skills` or `.agents/skills`; personal skills in `~/.copilot/skills` or `~/.agents/skills`; skill subfolder contains `SKILL.md`. [source 1](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills) · [source 2](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions).
- **OpenCode** — Open-source coding agent available as a terminal interface, supporting configurable agents and model providers. Support: Explicit Agent Skills: `SKILL.md` under project `.opencode/skills/<name>/`, `.claude/skills/<name>/`, `.agents/skills/<name>/`, and corresponding user locations `~/.config/opencode/skills`, `~/.claude/skills`, `~/.agents/skills`; invokes via native skill tool. [source 1](https://opencode.ai/docs/skills/) · [source 2](https://opencode.ai/docs/rules/).
- **Goose** — Block-originated, now Agentic AI Foundation-governed open-source general-purpose agent with a full CLI for coding and other terminal workflows. Support: Explicit Agent Skills via built-in Skills extension enabled by default. [source 1](https://goose-docs.ai/docs/guides/context-engineering/using-skills/) · [source 2](https://goose-docs.ai/docs/guides/context-engineering/using-goosehints).
- **Aider** — Open-source AI pair-programming tool operated from a terminal, with explicit support for loading coding-convention Markdown files into chat context. Support: No native Agent Skills/SKILL.md mechanism verified in cited docs. [source 1](https://aider.chat/docs/usage/conventions.html) · [source 2](https://aider.chat/docs/config/aider_conf.html).
- **Cursor CLI** — Cursor's command-line coding agent, documented as part of the Cursor coding-agent platform. Support: Cursor's official docs index lists CLI plus customization rules and skills, but the CLI overview alone does not establish exact CLI-level skill-folder discovery. [source 1](https://docs.cursor.com/en/cli/overview) · [source 2](https://docs.cursor.com/en/cli/using).

</details>

#### Hosted assistants and workspace agents

<details>
<summary>Browse hosted assistants and workspace agents</summary>

- **Claude (claude.ai Skills)** — Anthropic’s hosted Claude chat provides built-in and user/organization-defined skills: folders of instructions, optional scripts and reference material for repeatable specialized tasks. Support: Persistent native skill discovery is documented: skills are stored in the user's skill list or provisioned by an organization, reviewed for relevance and loaded dynamically; not merely one-chat attachment. [source 1](https://support.claude.com/en/articles/12512176-what-are-skills) · [source 2](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview).
- **Gemini Apps (Skills; Gems transition)** — Gemini Apps lets users create/save skills containing custom instructions and optionally uploaded skill files/folders (including SKILL.md and supported references), usable across chats and tasks. Existing custom Gems are the legacy route during migration. Support: Persistent native skill discovery is documented: Gemini may apply activated skills automatically by relevance, or users select one with / or @. [source 1](https://support.google.com/gemini/answer/17094296?hl=en) · [source 2](https://support.google.com/gemini/answer/18560919?hl=en).
- **ChatGPT (Projects and GPTs)** — ChatGPT Projects persist project-specific instructions and files for ongoing work; custom GPTs persist configured instructions, knowledge files and tools as shareable assistants. Support: Project instructions/files are persistent within the project, not an automatically discovered cross-project skill; an uploaded file in a project is durable project context, not a single-chat-only attachment. [source 1](https://help.openai.com/en/articles/10169521-projects-in-chatgpt) · [source 2](https://help.openai.com/en/articles/8554397-creating-and-editing-gpts).
- **Microsoft Copilot (Agent Builder / declarative agents)** — Microsoft Copilot's Agent Builder enables users to configure personalized agents from a prompt or template, and managed Microsoft 365 declarative agents can use custom instructions, knowledge and actions. Support: Persistent agent configuration, not a globally auto-discovered skill: users create and then select/use the saved agent in Copilot. [source 1](https://support.microsoft.com/en-us/microsoft-365-copilot/build-your-own-agent-with-microsoft-365-copilot) · [source 2](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agents-overview).
- **Perplexity (Projects)** — Perplexity Projects are persistent, shareable workspaces combining searches, Computer tasks, files, instructions, connected tools and skills. Project instructions apply to queries run within the project; reusable skills may be managed at project scope, while personal/organization skills remain available there too. Support: Project instructions and files are durable project context, not temporary chat attachment. [source 1](https://www.perplexity.ai/help-center/en/articles/10352961-what-are-projects) · [source 2](https://www.perplexity.ai/help-center/llms.txt).
- **Notion Agent and Custom Agents** — Notion Agent is an interactive workspace assistant personalized with reusable instructions and skills. Custom Agents are configured shared workflows that run on instructions and can use selected Notion/connected-app context and triggers. Support: Notion Agent supports reusable personal instructions/skills (a separate customization page is linked from its official help); these are persistent personalization rather than one-time attachments. [source 1](https://www.notion.com/help/notion-agent) · [source 2](https://www.notion.com/help/custom-agents).
- **Poe (Prompt Bots)** — Poe lets a user create a prompt bot on a selected base bot, supply persistent behavioral instructions, optionally upload/text-provide a retrievable knowledge base, and share the resulting bot. Support: Persistent custom bot configuration, not general automatic skill discovery: the prompt and knowledge base persist on the bot and are applied when users chat with it. [source 1](https://creator.poe.com/docs/prompt-bots/how-to-create-a-prompt-bot) · [source 2](https://poe.com/create_bot).

</details>

#### Agent frameworks and builders

<details>
<summary>Browse agent frameworks and builders</summary>

- **Claude / Anthropic Agent Skills** — Anthropic’s modular, filesystem-based capability bundles: instructions, metadata, and optional scripts, templates, and reference material loaded progressively as relevant. Support: Available in Claude API, Claude Code, claude.ai, Claude Platform on AWS, and Anthropic-hosted Microsoft Foundry deployments, subject to documented surface-specific limits. [source 1](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) · [source 2](https://github.com/anthropics/skills).
- **GitHub Copilot** — Repeatable workflows packaged as task-specific instructions, scripts, and resources, which Copilot can load when relevant. Support: Documented for Copilot app, CLI, cloud agent, code review, and IDE agent modes (IDE support varies by version). [source 1](https://docs.github.com/en/copilot/concepts/customizations/agent-skills) · [source 2](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).
- **Cursor** — An agentic coding product with reusable task skills containing instructions and optional scripts, templates, and references. Support: Official docs explicitly support Agent Skills and SKILL.md with automatic discovery, manual invocation, built-in and user-created skills, and compatibility discovery from Claude/Codex skill directories. [source 1](https://cursor.com/docs/skills) · [source 2](https://github.com/agentskills/agentskills).
- **OpenAI ChatGPT and Codex** — Reusable task capabilities comprising instructions, resources, and optional scripts; plugins can distribute skills alongside connectors. Support: Official build documentation says skills extend ChatGPT and Codex, with standalone skills available in ChatGPT desktop, Codex CLI, and IDE extension; plugin-bundled skills are also available in ChatGPT web/desktop/mobile and Codex. [source 1](https://learn.chatgpt.com/docs/build-skills) · [source 2](https://developers.openai.com/plugins/build/plugins).
- **Google Agent Development Kit (ADK)** — Framework-level reusable skill packages that provide modular instructions and resources which agents can load on demand. Support: Official ADK docs document a Skills feature and file-based skills with SKILL.md and optional resources; ADK supports multiple implementation languages. [source 1](https://adk.dev/skills/) · [source 2](https://developers.googleblog.com/developers-guide-to-building-adk-agents-with-skills/).
- **LangChain Deep Agents** — Deep Agents load directories of domain expertise, workflows, scripts, references, and templates progressively, enabling reusable capabilities across agents and projects. Support: Official documentation requires a directory containing SKILL.md with YAML name/description frontmatter, supports optional files and multiple skill sources, and explicitly says Deep Agent skills follow the Agent Skills specification. [source 1](https://docs.langchain.com/oss/python/deepagents/skills) · [source 2](https://github.com/langchain-ai/langchain-skills).

</details>

## Public model families

The model list is a **curated selection of 50 unique families represented by 53 category entries** across language, reasoning/coding, vision, image, video, audio, and retrieval. Families may appear in more than one category because they handle multiple modalities. “Trending” is not one measurable property: release activity, model-hub downloads, benchmarks, and community adoption are different signals. The notes below report only sourced release/availability signals and do not claim a universal popularity ranking.

**License reminder:** “Open-weight” does not automatically mean OSI-approved open source. Code and weights may have different licenses. Verify the exact checkpoint, version, derivative, and use restrictions before deployment.

### Live trending snapshot

The Hugging Face Hub page was sorted by its **Trending** ranking on 28 October 2026. This is a changing platform ranking, not a quality leaderboard or a list of universally “best” models. The recent-download figure below is the model card's rolling last-month count where available; it measures Hub activity, not unique users or production adoption.

| Checkpoint currently surfaced by the Hub | Task | Hub activity at check | Weight terms shown on the model card |
|---|---|---:|---|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Multimodal text generation | 7.52M downloads last month | Apache-2.0 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Audio/video generation | 2.16M downloads; 9.59k likes shown | LTX Community License; check current terms |
| [DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | Multimodal language/reasoning | 105.7k downloads last month | MIT |
| [NVIDIA Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | Compact text generation | 44.7k downloads last month | OpenMDW-1.1; custom terms, not OSI-approved |
| [MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | Image generation | 13.3k downloads last month | Apache-2.0 |
| [Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Text generation / reasoning | 4.8k downloads last month | Apache-2.0 |
| [MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | Multimodal language / coding | Listed on the Hub's current trending page | MiniMax Community License; custom terms, not OSI-approved |
| [Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | OCR / vision-language | Listed on the Hub's current trending page | MIT |

The “downloads last month” figures are copied from each current model card. Counts vary by day, checkpoint, and quantization. The current [Hub trending page](https://huggingface.co/models?sort=trending) can contain owner releases and third-party conversions together; check who published a checkpoint before deploying it. A model appearing in this snapshot is not automatically a fit for a particular hardware budget or use case.
### General-purpose language

<details>
<summary>Explore the general-purpose language entries</summary>

#### Llama 4

Meta's Scout and Maverick mixture-of-experts models support general language and code generation with text/image inputs.

- **Availability:** Publicly released static checkpoints; Meta's model card gives release date 2025-04-05 and status as static offline-trained models. Checkpoints downloadable from Meta/Hugging Face subject to the community license process.
- **Weights / terms:** Open-weight, not OSI-approved open-source: custom Llama 4 Community License Agreement plus acceptable-use policy, attribution/notices and other conditions. Meta's model card identifies this expressly as a custom commercial license.
- **Release or activity signal:** Official release date 2025-04-05 is directly stated in model card; current activity/popularity not asserted.
- **Sources:** [source 1](https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md) · [source 2](https://github.com/meta-llama/llama-models/blob/main/models/llama4/LICENSE) · [source 3](https://ai.meta.com/blog/llama-4-multimodal-intelligence/).

#### Qwen3

Alibaba Cloud's Qwen family includes dense and MoE general chat, instruction-following and reasoning checkpoints, with multilingual support; official repository announces Qwen3-2507 variants as updated versions.

- **Availability:** Weights publicly offered via linked Hugging Face and ModelScope collections. Repository documents the Qwen3 release and 2507 variants; latest dated official repository release notes in evidence are August 2025.
- **Weights / terms:** Official Qwen3 repository says open-weight models are licensed Apache 2.0 and directs users to the license files in each respective Hugging Face repository. Apache-2.0 is OSI-approved; verify the exact checkpoint's accompanying license before use.
- **Release or activity signal:** Dated official repository announcements include Qwen3 launch 2025-04-29 and Qwen3-2507 releases July-August 2025; repository is active with 303 commits at source inspection.
- **Sources:** [source 1](https://github.com/QwenLM/Qwen3) · [source 2](https://qwenlm.github.io/blog/qwen3/) · [source 3](https://huggingface.co/Qwen/Qwen3-8B).

#### DeepSeek-V3

DeepSeek's general language model series, with V3.2 as a released successor to V3.2-Exp and V3.2-Speciale as a separate research-oriented reasoning variant.

- **Availability:** V3.2 base/chat model weights are publicly linked by DeepSeek's official release notice to Hugging Face; Speciale's availability and API status differ, so this entry's downloadable status applies to V3.2, not every variant.
- **Weights / terms:** Model repository reports MIT License for repository and weights; DeepSeek V3 GitHub cautions that model use is subject to the model license. MIT is OSI-approved; consult the V3.2 model card/license file for the precise checkpoint terms.
- **Release or activity signal:** Official release notice dated 2025-12-01 calls V3.2 the successor and announces public model downloads; no popularity claim made.
- **Sources:** [source 1](https://api-docs.deepseek.com/news/news251201/) · [source 2](https://huggingface.co/deepseek-ai/DeepSeek-V3.2) · [source 3](https://github.com/deepseek-ai/DeepSeek-V3).

#### Gemma

Google DeepMind's downloadable Gemma family of language models, with current documentation listing Gemma 4 and prior generations; supports general-purpose language tasks, with some generations also multimodal.

- **Availability:** Public weights and current official Gemma documentation are available; Gemma 4 has a dedicated license, while older models remain governed by distinct Gemma Terms of Use. Do not assume terms are interchangeable across generations.
- **Weights / terms:** Gemma 4: official terms navigation identifies an Apache 2.0 license (OSI-approved). Older Gemma 1-3 models: custom Gemma Terms of Use with prohibited-use restrictions, redistribution obligations and other conditions; not OSI-approved. Version-specific terms govern.
- **Release or activity signal:** Official documentation observed as of 2026-10-28 identifies Gemma 4 model card and Gemma 4 license; older Gemma terms page says last modified 2026-04-01. No release-date popularity claim beyond those dated records.
- **Sources:** [source 1](https://ai.google.dev/gemma/terms) · [source 2](https://ai.google.dev/gemma/apache_2) · [source 3](https://ai.google.dev/gemma/docs/core/model_card_4).

#### Mistral Small

Mistral Small 4 is a general chat, coding, agentic and reasoning hybrid MoE model, accepting text and image input and unifying earlier instruct, reasoning and multimodal strengths.

- **Availability:** Publicly released March 16, 2026; vendor directs users to a Hugging Face collection and states it is available through supported inference stacks. Documentation distinguishes the open weights from Mistral API availability.
- **Weights / terms:** Apache License 2.0 for Small 4 weights, OSI-approved. Confirm per-checkpoint terms when using earlier Small generations, since family variants may differ.
- **Release or activity signal:** Vendor release page is dated 2026-03-16 and calls it the next major Mistral Small release; directly verifiable release evidence.
- **Sources:** [source 1](https://mistral.ai/news/mistral-small-4/) · [source 2](https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03) · [source 3](https://huggingface.co/collections/mistralai/mistral-small-4).

#### Granite

IBM's Granite 4.2 comprises dense 3B, 8B and 30B reasoning language models, offering general chat, reasoning and tool-calling modes.

- **Availability:** Official documentation identifies model collection and downloadable Hugging Face weights. IBM's Granite docs warn that the documentation site is no longer updated and directs users to the Hugging Face organization and GitHub for latest models.
- **Weights / terms:** Granite 4.2 weights released under Apache 2.0, an OSI-approved license, according to the model documentation. Verify specific checkpoint repository's license file for any later revisions.
- **Release or activity signal:** Official documentation currently names Granite 4.2 and its collection; an official IBM announcement dated 2025-10-02 verifies Granite 4.0 release. No popularity claim asserted.
- **Sources:** [source 1](https://www.ibm.com/granite/docs/models/granite4-2) · [source 2](https://huggingface.co/collections/ibm-granite/granite-42-language-models) · [source 3](https://github.com/ibm-granite/granite-4.2-language-models).

#### Phi

Microsoft's Phi family comprises compact general-language models, including Phi-4, Phi-4-mini and Phi-4-multimodal, for language instruction, reasoning and related tasks.

- **Availability:** Microsoft's current product page says Phi-4-mini and Phi-4-multimodal are the newest named models, with access via Hugging Face, Azure AI Foundry and Ollama; local deployment is supported. That page does not provide a per-checkpoint weight license inventory.
- **Weights / terms:** Microsoft describes Phi models as MIT-licensed/open source. MIT is OSI-approved; because model-specific repositories can supply particular terms, check each downloaded checkpoint's model card and LICENSE rather than inferring from family-wide marketing.
- **Release or activity signal:** Official product page identifies Phi-4-mini and Phi-4-multimodal as newest and publicly states availability channels; it gives no dated latest release date, so no release-trend inference is made.
- **Sources:** [source 1](https://azure.microsoft.com/en-us/products/phi) · [source 2](https://huggingface.co/microsoft/phi-4) · [source 3](https://github.com/microsoft/PhiCookBook).

#### OLMo

Ai2's OLMo is a research-oriented family of general language models released with weights and, in its open-research releases, training code, evaluation code and data artifacts.

- **Availability:** Ai2's official launch documents publicly downloadable OLMo weights and checkpoints via Hugging Face and GitHub. That launch page concerns the initial 2024 generation; current model lineup should be checked in the official OLMo hub rather than treating that historic post as a current version list.
- **Weights / terms:** The cited initial OLMo release explicitly places code, weights and intermediate checkpoints under Apache 2.0 (OSI-approved). Verify the license attached to each later OLMo release individually.
- **Release or activity signal:** Official launch post dated 2024-02-01 provides a verifiable release date; the cited source does not establish current popularity or recent activity.
- **Sources:** [source 1](https://allenai.org/blog/olmo-open-language-model-87ccfc95f580) · [source 2](https://github.com/allenai/OLMo) · [source 3](https://huggingface.co/allenai).

</details>

### Reasoning and coding

<details>
<summary>Explore the reasoning and coding entries</summary>

#### DeepSeek-R1

DeepSeek’s first-generation RL-centered reasoning releases, including R1-Zero and R1, plus six Qwen/Llama-based distilled checkpoints; supports math, code, and general reasoning. Its README reports benchmark comparisons as vendor evaluations, not independent verification.

- **Availability:** Released checkpoints are publicly downloadable through DeepSeek’s Hugging Face organization; canonical repository includes usage and evaluation guidance. Status: released, not merely announced.
- **Weights / terms:** Owner expressly says both repository code and model weights are MIT-licensed and permits commercial use and derivatives. Distilled Llama-based checkpoints retain upstream Llama license terms in addition to DeepSeek’s stated terms; check the specific checkpoint card and upstream license.
- **Release or activity signal:** Owner documents a multi-step pipeline of supervised fine-tuning and reinforcement-learning stages, and publishes dense distillations in six sizes—evidence of deliberate expansion of reasoning access, not independent evidence of ecosystem-wide growth.
- **Sources:** [source 1](https://github.com/deepseek-ai/DeepSeek-R1) · [source 2](https://github.com/deepseek-ai/DeepSeek-R1/blob/main/LICENSE) · [source 3](https://huggingface.co/deepseek-ai/DeepSeek-R1).

#### Qwen3-Coder

Qwen’s coding-oriented family includes 480B-A35B and 30B-A3B instruct models and Coder-Next. Owner describes repository-scale context and agentic coding; documentation explicitly says these instruct models operate in non-thinking mode, so do not characterize them as reasoning-mode models.

- **Availability:** Released checkpoints and variants (including base, instruct, FP8, and GGUF forms) are linked from the maintained QwenLM repository and available on Hugging Face/ModelScope.
- **Weights / terms:** The repository landing README does not state a single family-wide weights license. Verify each named Hugging Face/ModelScope model card and license file before use; do not infer weights licensing from the repository’s software license or claim OSI-approved status without that model-specific evidence.
- **Release or activity signal:** Qwen’s maintained repository documents multiple sizes and a newer Coder-Next generation, explicitly extending the family toward agentic/local coding. The performance comparisons are owner claims, not independently verified.
- **Sources:** [source 1](https://github.com/QwenLM/Qwen3-Coder) · [source 2](https://huggingface.co/collections/Qwen/qwen3-coder-687fc861e53c939e52d52d10) · [source 3](https://qwen.ai/blog?id=qwen3-coder-next).

#### Kimi K2

Moonshot AI’s 1-trillion-total/32-billion-active-parameter mixture-of-experts family, with base and instruct variants. Owner positions it for general chat, reasoning, coding, and tool use; instruct is described as reflex-grade without long thinking, so it is not a dedicated reasoning-mode model.

- **Availability:** Base and instruct model weights are publicly linked from the canonical GitHub repository and MoonshotAI Hugging Face organization; repository includes model and deployment guidance.
- **Weights / terms:** Repository explicitly states that both code and weights are under the Modified MIT License. This is not the unmodified MIT license; consult the published terms for conditions rather than labeling it OSI-approved open source.
- **Release or activity signal:** Owner’s released family bundles base and post-trained instruct variants and documents tool-use support; this substantiates a release design emphasizing agent workflows, not independent adoption or benchmark superiority.
- **Sources:** [source 1](https://github.com/moonshotai/kimi-k2) · [source 2](https://github.com/moonshotai/Kimi-K2/blob/main/LICENSE) · [source 3](https://moonshotai.github.io/Kimi-K2/).

#### GLM-4.5 / GLM-4.6 / GLM-4.7

Z.ai’s hybrid reasoning and agent-oriented family, combining thinking/non-thinking modes, coding, tool use, and general tasks. The canonical repository reports later GLM-4.6/4.7 checkpoints and owner benchmark comparisons; those figures are vendor-reported, not independent verification.

- **Availability:** Repository links current GLM-4.7, GLM-4.6, GLM-4.5, Air, and Flash weights on Hugging Face and ModelScope. Public weights are released; heavy variants require substantial multi-GPU resources, while Flash is positioned for lighter deployment.
- **Weights / terms:** The repository says GLM-4.5 and GLM-4.5-Air base, hybrid-reasoning, and FP8 weights are MIT-licensed and usable commercially/for secondary development. The repo’s top-level GitHub license indicator is Apache-2.0, so distinguish code/repository metadata from the README’s model-weight statement; verify each newer checkpoint’s model card/license before assuming identical terms.
- **Release or activity signal:** Repository documents successive 4.5, 4.6, and 4.7 releases, expanded reasoning controls, and a smaller Flash option. Benchmark deltas are owner-reported and not independent trend measurements.
- **Sources:** [source 1](https://github.com/zai-org/GLM-4.5) · [source 2](https://huggingface.co/zai-org/GLM-4.7) · [source 3](https://z.ai/blog/glm-4.7).

#### OpenAI gpt-oss

OpenAI’s downloadable open-weight reasoning family (gpt-oss-20b and gpt-oss-120b), designed for local and data-center use with configurable reasoning effort and agentic/tool capabilities. OpenAI-published benchmark results are vendor claims, not independent replication.

- **Availability:** Publicly available via OpenAI’s linked Hugging Face collection and canonical GitHub repository; two sizes are listed. OpenAI also documents gpt-oss-safeguard separately.
- **Weights / terms:** OpenAI states the models are Apache 2.0 licensed. This is a permissive OSI-approved license for the weights as represented in official model documentation; confirm artifact-specific files for the exact checkpoint being deployed.
- **Release or activity signal:** The published range of two sizes, safeguard variants, local-run documentation, and full-parameter customization are owner-documented signs of a productized open-weight release, not independently measured uptake.
- **Sources:** [source 1](https://openai.com/open-models/) · [source 2](https://github.com/openai/gpt-oss) · [source 3](https://huggingface.co/collections/openai/gpt-oss-68911959590a1634ba11c7a4).

#### Gemma

Google DeepMind’s open-weight language-model family, with successive versions and multimodal variants. Official repository provides a library for using and fine-tuning; it is not a dedicated coding model. Capability claims should be read against the relevant model card/version.

- **Availability:** Model checkpoints are distributed through official documentation/checkpoint channels and model hubs; the official library identifies Gemma 2, 3, 3n, and 4 usage. Access and terms are version-specific.
- **Weights / terms:** Not one family-wide license: Gemma 4 has a separate Apache 2.0 license page; earlier Gemma releases are governed by Google’s Gemma Terms of Use, with prohibited-use, redistribution, and notice conditions. Earlier terms are not an OSI-approved open-source license; do not apply them to Gemma 4 or vice versa without checking version-specific terms.
- **Release or activity signal:** The official maintained library documents versions 2, 3, 3n, and 4 plus multimodal and fine-tuning workflows, evidencing continued version development; this is not independent market-adoption evidence.
- **Sources:** [source 1](https://github.com/google-deepmind/gemma) · [source 2](https://ai.google.dev/gemma/terms) · [source 3](https://ai.google.dev/gemma/apache_2).

#### Codestral

Mistral’s code-focused model family, designed for code generation, fill-in-the-middle completion, and programming-language coverage. The cited official launch page describes the 22B Codestral release and gives vendor benchmark claims; it does not establish independent results.

- **Availability:** The Codestral-22B-v0.1 checkpoint is downloadable from the linked Hugging Face model page; the owner also describes hosted/API and self-deployment offerings. Check current service documentation for endpoint availability and terms.
- **Weights / terms:** The cited launch release says Codestral 22B weights use the Mistral AI Non-Production License, for research/testing; commercial use requires a commercial license from Mistral. Therefore open-weight with material use restrictions, not OSI-approved open source.
- **Release or activity signal:** The owner documents an explicit code-model release, fill-in-the-middle functionality, and integrations in developer tooling. The launch page’s comparative benchmark assertions are owner claims, not independent evidence of market trend.
- **Sources:** [source 1](https://mistral.ai/news/codestral/) · [source 2](https://mistral.ai/news/mistral-ai-non-production-license-mnpl/) · [source 3](https://huggingface.co/mistralai/Codestral-22B-v0.1).

#### DeepSeek-Coder-V2

DeepSeek’s code-oriented MoE family, released in base and instruct variants in 16B and 236B total-parameter sizes. Owner says it expands language support and context and improves coding/math while maintaining general-language capability; its benchmark comparisons are vendor-reported.

- **Availability:** Public base and instruct checkpoints are linked from the maintained canonical repository and DeepSeek’s Hugging Face organization.
- **Weights / terms:** Weights are governed by DeepSeek’s separate DEEPSEEK LICENSE AGREEMENT (version 1.0), not the repository’s MIT code license. The model license permits commercial use subject to use-based restrictions, redistribution obligations, and notices. It is a custom responsible-use license, not OSI-approved open-source licensing.
- **Release or activity signal:** Owner documents a move from 86 to 338 supported programming languages and from 16K to 128K context versus its earlier Coder line, alongside multiple model sizes; these are owner-reported release specifications, not independently verified market trends.
- **Sources:** [source 1](https://github.com/deepseek-ai/DeepSeek-Coder-V2) · [source 2](https://github.com/deepseek-ai/DeepSeek-Coder-V2/blob/main/LICENSE-MODEL) · [source 3](https://github.com/deepseek-ai/DeepSeek-Coder-V2/blob/main/LICENSE-CODE).

#### Llama 4

Meta’s multimodal Scout and Maverick model family, generally usable for coding/reasoning tasks but not a dedicated code-generation family. Meta’s repository provides model cards, terms, sizes, and download instructions; claims in cards are owner-reported.

- **Availability:** Released weights are available after accepting Meta’s license and gaining access approval; Meta’s canonical repository lists Scout/Maverick and links model cards and license/use policy.
- **Weights / terms:** Weights are subject to Meta’s Llama 4 license and acceptable-use policy, not an OSI-approved open-source license. Distribution requires accepting terms and approved access; the code repository’s software license is not the weights license.
- **Release or activity signal:** Official repository enumerates successive model families and records Llama 4’s Scout/Maverick release and multi-million-token context claims; these demonstrate continued family development, not independent adoption evidence.
- **Sources:** [source 1](https://github.com/meta-llama/llama-models) · [source 2](https://github.com/meta-llama/llama-models/blob/main/models/llama4/LICENSE) · [source 3](https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md).

</details>

### Vision and multimodal

<details>
<summary>Explore the vision and multimodal entries</summary>

#### Qwen3-VL

Qwen's vision-language model series, released in dense and MoE variants, for visual perception, reasoning, document/OCR tasks, grounding and agent interactions.

- **Availability:** Publicly downloadable model checkpoints are listed in the official Hugging Face collection and ModelScope. Owner documentation explicitly describes image and video understanding; checkpoint/release variants are listed in the repository news and quickstart.
- **Weights / terms:** Repository states Apache-2.0; identify as open-weight under Apache-2.0, not merely hosted/API access. Confirm the specific checkpoint's model-card terms when selecting variant.
- **Release or activity signal:** Dated repository news lists successive public checkpoint releases in September–October 2025, including 2B, 4B, 8B, 30B-A3B, 32B and 235B-A22B lines; this establishes continuing releases/scale range, not a general market trend.
- **Sources:** [source 1](https://github.com/QwenLM/Qwen3-VL) · [source 2](https://huggingface.co/collections/Qwen/qwen3-vl-68d2a7c1b8a8afce4ebd2dbe) · [source 3](https://github.com/QwenLM/Qwen3-VL/blob/main/cookbooks/video_understanding.ipynb).

#### Gemma 4

Google DeepMind's multimodal model family, including smaller E2B/E4B, 12B Unified, 26B-A4B MoE and 31B checkpoints; generates text from documented image/text input, with audio on specified variants.

- **Availability:** Public downloadable checkpoints are listed in the official model collection and Hugging Face family post. The owner documentation says all sizes support images or video plus text; E2B, E4B and 12B Unified support audio as well. Video support is documented; refer to the model guide for each variant's accepted input path.
- **Weights / terms:** Apache 2.0 license, as stated in the official Gemma 4 family announcement. This differs from Gemma 3's prior Gemma Terms/access conditions; do not apply older-family terms to Gemma 4.
- **Release or activity signal:** The April 2026 release describes five model sizes and both base and instruction-tuned checkpoints; evidence of a newly broadened family release, not a market-wide trend.
- **Sources:** [source 1](https://huggingface.co/blog/gemma4) · [source 2](https://huggingface.co/collections/google/gemma-4) · [source 3](https://github.com/huggingface/huggingface-gemma-recipes).

#### Llama 4

Meta's Scout and Maverick MoE models with native text-and-image understanding, producing text/code; built for visual reasoning, recognition, captioning and image question answering.

- **Availability:** Scout and Maverick checkpoints are downloadable from the official Hugging Face publisher pages and Meta's model repositories, subject to accepting terms. The official model card documents multilingual text and image as input and text/code output; image understanding tested up to five images. Video input is not claimed here.
- **Weights / terms:** Custom Llama 4 Community License, not OSI-approved open-source. Access requires agreement to the license; terms include an acceptable-use policy and additional requirements for certain very large services. Review the current license before use.
- **Release or activity signal:** Meta's model card gives release date April 5, 2025 and documents two initial variants with distinct parameter scales; no broader trend inferred.
- **Sources:** [source 1](https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md) · [source 2](https://github.com/meta-llama/llama-models/blob/main/models/llama4/LICENSE) · [source 3](https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct).

#### GLM-V (GLM-4.6V / 4.5V / 4.1V)

Z.ai's downloadable VLM lineup spanning larger hybrid-reasoning and smaller local-deployment models, including GLM-4.6V, GLM-4.6V-Flash, GLM-4.5V and GLM-4.1V. Documentation describes visual understanding, grounding and tool/function calling.

- **Availability:** Public Hugging Face and ModelScope checkpoints are listed in the canonical repository; repository documents local deployment integrations. The README documents image, screenshot and document-page inputs; video support appears in a desktop helper that connects to the multimodal API, so that helper is not proof of native local video-weight input. Distinguish downloaded model inference from separate API services.
- **Weights / terms:** The canonical repository code is Apache-2.0 and links publicly downloadable model checkpoints. Do not treat the code license alone as definitive weights licensing; check each linked checkpoint's model-card license/access fields before use. Public checkpoint availability is established, but no claim of OSI-approved weight license is made here.
- **Release or activity signal:** The repository lists successive 4.1V, 4.5V and 4.6V model lines and checkpoint variants, including FP8 and Flash; dated owner update records these releases. This supports release progression within this family only.
- **Sources:** [source 1](https://github.com/zai-org/GLM-V) · [source 2](https://huggingface.co/zai-org/GLM-4.6V) · [source 3](https://huggingface.co/zai-org/GLM-4.1V-9B-Thinking).

#### MiniCPM-V / MiniCPM-o

OpenBMB's compact vision-language line and related omni-modal line. MiniCPM-V 4.7 supports image, multi-image, document and video understanding; MiniCPM-o 4.5 is a 9B end-to-end model for continuous audio/video input and concurrent speech/text output.

- **Availability:** The repository lists downloadable 1B and 35B-A3B MiniCPM-V 4.7 weights in BF16 and quantized formats, plus MiniCPM-o 4.5 model page. Video understanding is explicitly documented for V 4.7; continuous live audio/video input is documented for o 4.5. Some API access also exists, but local weight downloads are separately listed.
- **Weights / terms:** The canonical repository declares Apache-2.0; verify the model card and terms for the exact checkpoint/variant. Public links to weights are provided; use of the hosted API is not required for local inference.
- **Release or activity signal:** The repository dates MiniCPM-V 4.7 release to 2026-10-12 and enumerates 1B and 35B-A3B variants plus multiple quantizations, substantiating a recent expansion of this family only.
- **Sources:** [source 1](https://github.com/OpenBMB/MiniCPM-V) · [source 2](https://github.com/OpenBMB/MiniCPM-V/blob/main/docs/minicpm_v4dot7_en.md) · [source 3](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B).

#### Molmo 2

Ai2's vision-language models focused on visual understanding, point-driven grounding, tracking, and video tasks; includes Molmo2 and MolmoPoint variants.

- **Availability:** The canonical repository provides public Hugging Face model collections and direct downloadable training/SFT/long-context checkpoints. Explicitly documents single-image, multi-image and video tasks; long-context training supports sequences of up to 384 frames in the cited example.
- **Weights / terms:** Repository code is Apache-2.0. That repository license should not be assumed to govern each model checkpoint; consult the linked AllenAI model-card terms for the exact weights. Public weights are linked, and no API-only access is required.
- **Release or activity signal:** Repository describes checkpoints at pre-training, SFT and long-context SFT stages and names multiple model sizes, substantiating publication of staged checkpoints rather than a broader ecosystem trend.
- **Sources:** [source 1](https://github.com/allenai/molmo2) · [source 2](https://huggingface.co/collections/allenai/molmo2) · [source 3](https://allenai.org/blog/molmo2).

#### Phi-4-multimodal-instruct

Microsoft's compact unified model for text, image and audio inputs with text output, including visual QA, OCR, chart/table understanding, multiple-image comparison, and video-clip summarization use cases.

- **Availability:** Model weights are publicly downloadable from Microsoft's Hugging Face model repository and the card documents local loading. Inputs explicitly include text, image and audio; the card lists video-clip summarization as an intended use case, not necessarily a native video stream modality, so treat video as frame/clip workflow rather than claim of native streaming video input.
- **Weights / terms:** Hugging Face model card states MIT license; model card also identifies broad commercial and research use. Weight repository is publicly accessible, with no gated-access condition shown on the cited card.
- **Release or activity signal:** The model card release notes describe a unified single network replacing an earlier two-model speech-to-text plus vision/language pipeline; evidence of this model's design evolution only.
- **Sources:** [source 1](https://huggingface.co/microsoft/Phi-4-multimodal-instruct) · [source 2](https://aka.ms/phi4-feb2025) · [source 3](https://github.com/microsoft/PhiCookBook).

#### Qwen2.5-Omni

Qwen's end-to-end omni-modal family that perceives text, images, audio and video and can produce streaming text and natural speech.

- **Availability:** The official repository lists downloadable 3B and 7B checkpoints and quantized variants on Hugging Face and ModelScope, alongside local inference instructions. Text, image, audio and video inputs and text/audio generation are explicitly documented.
- **Weights / terms:** Canonical repository states Apache-2.0 and provides public checkpoint links. API inference is an additional route, not the only access path; weights can be downloaded for local inference.
- **Release or activity signal:** Dated repository news records 7B initial release in March 2025, followed by a 3B checkpoint and GPTQ/AWQ quantized releases in April–May 2025; substantiates successive variants in this family only.
- **Sources:** [source 1](https://github.com/QwenLM/Qwen2.5-Omni) · [source 2](https://huggingface.co/collections/Qwen/qwen25-omni-67de1e5f0f9464dc6314b36e) · [source 3](https://github.com/QwenLM/Qwen2.5-Omni/blob/main/LICENSE).

</details>

### Image generation

<details>
<summary>Explore the image generation entries</summary>

#### Stable Diffusion 3.5

Stability AI’s MMDiT text-to-image family, including Large, Large Turbo, and Medium; weights are offered for self-hosting and downstream customization.

- **Availability:** Active; owner announcement confirms downloadable weights and inference code. Model card presents local Diffusers use, although access requires agreeing to the model terms on Hugging Face.
- **Weights / terms:** Stability AI Community License (not OSI-approved open-source): free non-commercial/research use and commercial use for organizations or individuals below $1M annual revenue; entities above that threshold must obtain an Enterprise License. Use is also subject to the owner’s Acceptable Use Policy.
- **Release or activity signal:** Owner announcement lists three released variants, while the current model card displays downloadable artifacts and local inference guidance. This substantiates active distribution, not a quantified market-growth claim.
- **Sources:** [source 1](https://stability.ai/news-updates/introducing-stable-diffusion-3-5) · [source 2](https://huggingface.co/stabilityai/stable-diffusion-3.5-large) · [source 3](https://huggingface.co/stabilityai/stable-diffusion-3.5-large/blob/main/LICENSE.md).

#### FLUX.1

Black Forest Labs’ rectified-flow image generation family, with text-to-image and specialized generation/editing variants; FLUX.1 [dev] is a publicly downloadable 12B-parameter checkpoint.

- **Availability:** Active; official repository provides local inference code and identifies its FLUX.1 open-weight models. Hugging Face access for [dev] requires accepting the stated terms.
- **Weights / terms:** Checkpoint-specific terms. FLUX.1 [dev] is under the FLUX.1 [dev] Non-Commercial License, with limited permitted commercial usage only as defined in that license and commercial licensing/usage-tracking terms from BFL; it is not permissive open source. Other variants, e.g. schnell, have different terms; check the exact checkpoint’s license. FLUX.1 [dev] also has an Acceptable Use Policy.
- **Release or activity signal:** The official repository documents local inference and a model suite, and the [dev] model card reports 615,792 downloads in the prior month at verification. The download figure is a platform metric, not evidence of growth over time.
- **Sources:** [source 1](https://github.com/black-forest-labs/flux) · [source 2](https://huggingface.co/black-forest-labs/FLUX.1-dev) · [source 3](https://huggingface.co/black-forest-labs/FLUX.1-dev/blob/main/LICENSE.md).

#### FLUX.2

Black Forest Labs’ newer open-weight family for text-to-image generation and single- or multi-reference image editing, comprising FLUX.2 [dev] and the smaller [klein] models.

- **Availability:** Active; official GitHub inference repository lists downloadable checkpoints, local inference instructions, and 2025–26 model releases. FLUX.2 [klein] 4B, 9B, and [dev] are distinct downloadable variants.
- **Weights / terms:** Checkpoint-specific. FLUX.2 [klein] 4B and 4B Base are Apache-2.0; the 9B, 9B KV, 9B Base, and FLUX.2 [dev] are under BFL’s FLUX Non-Commercial/FLUX.2-dev Non-Commercial terms. Thus only the 4B weights are described as Apache-2.0; do not infer that license for the entire family.
- **Release or activity signal:** The official repository records [dev] release in November 2025 and [klein] releases in January 2026, with published local inference and hardware guidance; this supports continuing releases, not a general adoption trend.
- **Sources:** [source 1](https://github.com/black-forest-labs/flux2) · [source 2](https://github.com/black-forest-labs/flux2/blob/main/model_licenses/LICENSE-FLUX-DEV) · [source 3](https://huggingface.co/black-forest-labs/FLUX.2-klein-4B).

#### Qwen-Image

Qwen’s 20B image foundation model family, aimed at text-to-image generation and image editing, with notable emphasis on typography and complex text rendering. Official project materials list later generation/editing checkpoints as well as the base model.

- **Availability:** Active; owner repository enumerates weight releases and gives local Diffusers loading examples; base weights are publicly downloadable from Hugging Face and ModelScope. Do not assume every newer checkpoint in the family has identical terms without checking its own model card.
- **Weights / terms:** The Qwen-Image base model card explicitly states Apache-2.0 for the weights. This is a permissive OSI-approved license for that cited base checkpoint. Confirm exact license on the individual card for subsequent versions/derivatives.
- **Release or activity signal:** Official repository release history lists weight releases and downstream inference integrations; the base model card reports 285,367 downloads in the prior month at verification. These substantiate ongoing access/use but not a time-series growth trend.
- **Sources:** [source 1](https://github.com/QwenLM/Qwen-Image) · [source 2](https://huggingface.co/Qwen/Qwen-Image) · [source 3](https://qwenlm.github.io/blog/qwen-image/).

#### HunyuanImage 3.0

Tencent’s native multimodal autoregressive image model family, with text-to-image and instruction/image-to-image variants, including an instruct model and distilled checkpoint.

- **Availability:** Active; official repository provides downloadable checkpoints, inference instructions, and generation/editing demos. Owner lists public releases of base, instruct, and distilled weights.
- **Weights / terms:** Tencent Hunyuan Community License, a custom license rather than OSI-approved open source. Material limits: license excludes the EU, UK, and South Korea; use must comply with the Acceptable Use Policy; users with products/services above 100 million monthly active users at release must seek Tencent’s permission; distribution and model use carry notice/attribution and related conditions. See full agreement before use.
- **Release or activity signal:** Official repository records releases of the base model (September 2025), instruct and distilled checkpoints (January 2026), and local inference support. This substantiates an expanding checkpoint lineup, not market growth.
- **Sources:** [source 1](https://github.com/Tencent-Hunyuan/HunyuanImage-3.0) · [source 2](https://github.com/Tencent-Hunyuan/HunyuanImage-3.0/blob/main/LICENSE) · [source 3](https://huggingface.co/tencent/HunyuanImage-3.0).

#### Z-Image

Tongyi-MAI’s 6B single-stream diffusion-transformer family, covering standard and Turbo text-to-image checkpoints plus editing-oriented variants; the fast Turbo version is distilled for low-step inference.

- **Availability:** Active; owner repository documents downloadable Z-Image and Z-Image-Turbo weights with local inference examples. The same repository marks Omni-Base and Edit as unreleased there, so they are not counted as presently available checkpoints.
- **Weights / terms:** Apache-2.0 is shown for the Z-Image-Turbo model card, with inference weights available publicly. The canonical repository code is also Apache-2.0; check each specific weight card for other variants rather than assuming universal family-wide terms.
- **Release or activity signal:** The owner’s model zoo lists both standard and Turbo downloadable checkpoints and the repository gives dated release notices; its reported benchmark rankings are owner-reported, so they are not used here as independent adoption evidence.
- **Sources:** [source 1](https://github.com/Tongyi-MAI/Z-Image) · [source 2](https://huggingface.co/Tongyi-MAI/Z-Image-Turbo) · [source 3](https://huggingface.co/Tongyi-MAI/Z-Image).

#### PixArt-Σ (Sigma)

PixArt-alpha’s latent diffusion-transformer text-to-image model, released with 1024px and higher-resolution checkpoint variants and local inference code.

- **Availability:** Weights remain publicly downloadable and the canonical repository includes model definitions and inference/training instructions. The model card frames intended use as research purposes only, making this a research-restricted selection rather than a generally permissive commercial model.
- **Weights / terms:** Model card identifies CreativeML Open RAIL++-M (Hugging Face tag openrail++), not a permissive OSI-approved license; it states research-purpose intended use and includes use limitations. Repository code is Apache-2.0, but that does not override the model-weight license.
- **Release or activity signal:** Official repository documents multiple released resolution checkpoints and Diffusers integration; model card shows recent downloads. These support continued availability, not a demonstrated upward trend.
- **Sources:** [source 1](https://github.com/PixArt-alpha/PixArt-sigma) · [source 2](https://huggingface.co/PixArt-alpha/PixArt-Sigma-XL-2-1024-MS) · [source 3](https://huggingface.co/PixArt-alpha/PixArt-Sigma-XL-2-1024-MS/blob/main/LICENSE.md).

</details>

### Video generation

<details>
<summary>Explore the video generation entries</summary>

#### Wan (Wan 2.2)

Alibaba's Wan family; Wan 2.2 includes text-to-video, image-to-video, unified text/image-to-video, speech-to-video, and animation checkpoints.

- **Availability:** Actual weights and inference code publicly downloadable from owner-linked Hugging Face and ModelScope repositories; variants include T2V-A14B, I2V-A14B, TI2V-5B, S2V-14B, and Animate-14B. The owner repo records the Wan 2.2 release on 2025-07-28 and subsequent releases/integrations through November 2025.
- **Weights / terms:** Wan 2.2 repo says the models are Apache License 2.0. This is an OSI-approved open-source license for the identified Wan 2.2 model weights; observe Apache terms and repository notices.
- **Release or activity signal:** Owner repository documents a sequence of model releases and integrations: base 2.2 on 2025-07-28, S2V on 2025-08-26, Animate on 2025-09-19, and Diffusers integration 2025-11-13. This substantiates continuing family development through those dated announcements, not a market-share claim.
- **Sources:** [source 1](https://github.com/Wan-Video/Wan2.2) · [source 2](https://github.com/Wan-Video/Wan2.2/blob/main/LICENSE.txt) · [source 3](https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B).

#### HunyuanVideo (HunyuanVideo-1.5)

Tencent's 8.3B-parameter video-generation model line, with 480p/720p text-to-video and image-to-video checkpoints plus distilled variants.

- **Availability:** Actual checkpoints are linked from Tencent's canonical repo to Hugging Face model-card directories; source and inference implementation are also published. Owner announces initial inference code and weights on 2025-11-20, and later step-distilled I2V weights on 2025-12-05.
- **Weights / terms:** The weights are under the Tencent Hunyuan Community License Agreement, not Apache/MIT; review the linked LICENSE for eligibility, use restrictions, and territory carve-outs. It is not labeled OSI-approved open-source. Checkpoint downloads are publicly linked; confirm any hosting-specific conditions at the model card.
- **Release or activity signal:** The owner repo records dated initial weights release (2025-11-20), training-code release (2025-12-05), step-distilled checkpoint release (2025-12-05), and ongoing inference optimization announcements. These establish release activity, not comparative adoption.
- **Sources:** [source 1](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5) · [source 2](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5/blob/main/LICENSE) · [source 3](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5/blob/main/checkpoints-download.md).

#### LTX (LTX-2.5)

Lightricks' joint audio-and-video generation family with text/image-conditioned pipelines, full and distilled transformer checkpoints, VAEs, upscalers, and related components.

- **Availability:** Real model component weights are published at the owner-linked Hugging Face repository, and the official LTX-2 GitHub provides inference code and explicit download commands. Repository describes LTX-2.5 as recommended; downloads may require accepting Hugging Face terms and logging in with a read token.
- **Weights / terms:** Weights are covered by LTX-2.x Community License, distinct from the GitHub code license. Do not call this OSI-approved open source; the license provides conditional commercial use, including a revenue threshold, and users must review its precise restrictions and any terms for bundled third-party text encoder assets.
- **Release or activity signal:** Official repo calls LTX-2.5 the recommended model and lists LTX-2.3 as legacy; the dated LTX-2 repository and model card indicate continued family releases. This is verified product/release progression, not evidence of market share.
- **Sources:** [source 1](https://github.com/Lightricks/LTX-2) · [source 2](https://huggingface.co/Lightricks/LTX-2.5) · [source 3](https://github.com/Lightricks/LTX-2/blob/main/LICENSE-2_x).

#### CogVideoX

Zhipu AI's family including CogVideoX-2B, CogVideoX-5B, I2V variants, and CogVideoX1.5-5B checkpoints.

- **Availability:** Actual checkpoints are linked in the official repo to Hugging Face, ModelScope, and WiseModel, with inference and fine-tuning code. The repo's model table marks CogVideoX1.5-5B and I2V as latest in its listed release set (dated 2024-11-08); availability is confirmed, but the page's version recency is limited.
- **Weights / terms:** Exact model terms differ by checkpoint: CogVideoX-2B and its Transformers/VAE modules are Apache 2.0; CogVideoX-5B T2V/I2V uses the separate CogVideoX License. Do not infer 5B is Apache. The 2B weights qualify as OSI-approved open source under Apache 2.0; 5B is open-weight subject to its bespoke license.
- **Release or activity signal:** Canonical owner repo lists dated releases including CogVideoX1.5-5B and I2V on 2024-11-08, but supplies no later release evidence on the reviewed page. This supports historical release progression only; current activity is not inferred.
- **Sources:** [source 1](https://github.com/zai-org/CogVideo) · [source 2](https://github.com/zai-org/CogVideo/blob/main/LICENSE) · [source 3](https://huggingface.co/THUDM/CogVideoX-5b/blob/main/LICENSE).

#### Mochi 1

Genmo's 10B-parameter Asymmetric Diffusion Transformer text-to-video model, released as Mochi 1 preview with an inference harness and video VAE.

- **Availability:** Weights are directly downloadable from Genmo's site or linked Hugging Face repository; the official GitHub repo includes a script and inference code. Public downloadable checkpoint is verified, although it remains labeled a preview and the repository's latest dated news is from 2024.
- **Weights / terms:** Genmo states model is released under Apache 2.0; official GitHub repository also identifies Apache-2.0. On available evidence, the model weights and code are OSI-approved open-source under Apache 2.0. Genmo cautions organizations to implement additional safeguards before commercial deployment.
- **Release or activity signal:** Owner repo records 2024-11-05 ComfyUI consumer-GPU support and 2024-11-26 LoRA fine-tuning support; no newer owner release evidence was verified. Treat as available legacy/preview family, not evidence of ongoing 2026 releases.
- **Sources:** [source 1](https://github.com/genmoai/mochi) · [source 2](https://huggingface.co/genmo/mochi-1-preview) · [source 3](https://weights.genmo.dev/weights.zip).

#### NVIDIA Cosmos (Cosmos 3)

NVIDIA's omnimodal world-model family for physical-AI simulation and video generation, including image-to-video and world-scenario generation alongside reasoning and action-oriented models.

- **Availability:** Real downloadable checkpoints are offered through NVIDIA's model collection; official repository provides Diffusers inference example and names Cosmos3-Super (64B), Nano (16B), and Edge (4B), plus image-to-video example checkpoints. Model access is via owner-linked Hugging Face repositories; check individual card gating/terms.
- **Weights / terms:** Owner repo states source code and models are under OpenMDW-1.1, a model-specific license rather than an OSI-approved open-source license. Custom licensing is available from NVIDIA; third-party dependencies retain their own terms.
- **Release or activity signal:** The owner repository reports Cosmos 3 released in May 2026, Cosmos3-Edge in July 2026, and an October 2026 interactive simulation cookbook with example checkpoints and recipes. This is direct evidence of continuing release activity, not a quantitative adoption trend.
- **Sources:** [source 1](https://github.com/NVIDIA/Cosmos) · [source 2](https://openmdw.ai/license/1-1/) · [source 3](https://huggingface.co/collections/nvidia/cosmos3).

</details>

### Audio, speech, and music

<details>
<summary>Explore the audio, speech, and music entries</summary>

#### OpenAI Whisper (including large-v3/turbo checkpoints)

General-purpose multilingual speech recognition family, with speech-to-English translation and language-identification functions; downloadable checkpoints range from small to large, with turbo optimized for faster transcription.

- **Availability:** Model weights and inference code are publicly downloadable from the canonical repository; local Python/CLI inference documented. Available checkpoints include tiny/base/small/medium/large/turbo and English-only variants for several sizes.
- **Weights / terms:** MIT for code and model weights, explicitly stated by the upstream repository. On that evidence, permissive and OSI-approved open-source; third-party converted checkpoints may have their own packaging terms.
- **Release or activity signal:** Upstream’s published checkpoint set includes the turbo speed-optimized model, evidence of an efficiency/latency variant within the family; no broader market trend inferred.
- **Sources:** [source 1](https://github.com/openai/whisper) · [source 2](https://github.com/openai/whisper/blob/main/model-card.md) · [source 3](https://huggingface.co/openai/whisper-large-v3).

#### Meta SeamlessM4T / SeamlessStreaming / SeamlessExpressive

Multilingual speech/text translation model family. M4T supports ASR, speech/text translation and speech output; Streaming adds streaming ASR/translation; Expressive focuses on preserving voice style/prosody in speech-to-speech translation.

- **Availability:** Public checkpoints are linked directly from the canonical repository, with inference code and model cards. Availability differs by subfamily: M4T v1/v2 and Streaming are downloadable under CC terms; Seamless and Expressive use a separate Seamless license.
- **Weights / terms:** Do not treat as uniformly permissive: official repository specifies CC-BY-NC 4.0 for SeamlessM4T v1/v2 and SeamlessStreaming weights (noncommercial restriction), and a custom SEAMLESS_LICENSE for Seamless and SeamlessExpressive. Review those terms; not OSI-approved open-source weights.
- **Release or activity signal:** The owner documents the evolution from M4T to Streaming and Expressive, including real-time/streaming and voice-style preservation capabilities; this is evidence of feature development, not a general industry trend.
- **Sources:** [source 1](https://github.com/facebookresearch/seamless_communication) · [source 2](https://github.com/facebookresearch/seamless_communication/blob/main/SEAMLESS_LICENSE) · [source 3](https://huggingface.co/facebook/seamless-m4t-v2-large).

#### Qwen2-Audio

7B pretrained and instruction-tuned audio-language models accept audio inputs and generate textual responses, supporting voice chat and instruction-led audio analysis, including speech recognition, translation, sound and music-related analysis tasks.

- **Availability:** Qwen owner repository links downloadable Qwen2-Audio-7B and 7B-Instruct checkpoints on Hugging Face and ModelScope, and documents local Transformers inference. Audio input/response is model capability, not a separate hosted-only skill.
- **Weights / terms:** The owner directs users to each model’s Hugging Face license. The Qwen2-Audio-7B-Instruct model card identifies Apache-2.0; that checkpoint is permissively licensed and OSI-approved. Verify separately for other checkpoints/derivatives.
- **Release or activity signal:** Owner repo documents a pretrained/instruct pair plus voice-chat and audio-analysis modes, evidencing extension from audio perception toward conversational audio interaction; not a claim of category-wide trend.
- **Sources:** [source 1](https://github.com/QwenLM/Qwen2-Audio) · [source 2](https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct) · [source 3](https://qwenlm.github.io/blog/qwen2-audio/).

#### Qwen3-TTS

Released 0.6B and 1.7B multilingual speech-generation checkpoints with custom voices, natural-language voice design, instruction-controlled delivery, streaming and rapid reference-audio voice cloning; owner documents support for ten major languages.

- **Availability:** Public model family with manual download instructions for Hugging Face and ModelScope, local Python package and vLLM use. Owner repo lists specific released checkpoints and notes additional report models are not yet released.
- **Weights / terms:** Hugging Face model card for Qwen3-TTS-12Hz-1.7B-Base states Apache-2.0; owner repo lists Apache-2.0. Permissive and OSI-approved for that documented checkpoint; check each repo’s card for any other checkpoint or derivative.
- **Release or activity signal:** Owner documents low-latency streaming generation and voice design/cloning in the released family, indicating a concrete feature mix in this release; no universal trend inferred.
- **Sources:** [source 1](https://github.com/QwenLM/Qwen3-TTS) · [source 2](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base) · [source 3](https://qwen.ai/blog?id=qwen3tts-0115).

#### Parler-TTS

Text-to-speech models that use natural-language descriptions to steer perceived speaker and acoustic traits such as pitch, speaking style, pace and recording character; Mini and Large checkpoints are documented, including named-speaker consistency in Mini v1.

- **Availability:** Public Mini and Large checkpoints; canonical repository provides inference and training code and links weight collection. Local inference via Transformers/Python is shown in the model card and repo.
- **Weights / terms:** Parler-TTS Mini v1 model card states Apache-2.0, as does the official code repository; permissive and OSI-approved for that checkpoint. Check individual cards for newer or community checkpoints.
- **Release or activity signal:** Official project explicitly publishes both inference and training/data-preparation resources alongside weights, with promptable voice controls; evidence of this project’s reproducibility/control emphasis only.
- **Sources:** [source 1](https://github.com/huggingface/parler-tts) · [source 2](https://huggingface.co/parler-tts/parler-tts-mini-v1) · [source 3](https://huggingface.co/parler-tts).

#### OpenBMB VoxCPM / VoxCPM2

Tokenizer-free text-to-speech family; VoxCPM2 is owner-described as a multilingual 2B model with voice design, controllable voice cloning, high-quality output and streaming.

- **Availability:** Owner repository links the VoxCPM2 Hugging Face and ModelScope weights and documents local inference; release is publicly downloadable. Capabilities are model-based rather than a hosted skill requirement.
- **Weights / terms:** Official repository explicitly says both VoxCPM model code and weights are Apache-2.0; permissive and OSI-approved. Follow the owner’s stated prohibition on impersonation/fraud and applicable laws; that warning is separate from the license.
- **Release or activity signal:** The owner describes VoxCPM2 as adding 30-language support, voice design and controllable cloning, alongside streaming; these are documented release features, not a category-wide trend.
- **Sources:** [source 1](https://github.com/OpenBMB/VoxCPM) · [source 2](https://huggingface.co/openbmb/VoxCPM2) · [source 3](https://voxcpm.readthedocs.io/en/latest/).

#### Meta AudioCraft MusicGen

Controllable music generation from text descriptions, with a melody-conditioned variant. Meta’s AudioCraft repository includes MusicGen alongside AudioGen and other audio-generation tools.

- **Availability:** Model cards and AudioCraft repository make the MusicGen checkpoints publicly downloadable and provide local inference code. Available variants include small, medium, large and melody.
- **Weights / terms:** Weights are CC-BY-NC 4.0, explicitly stated in both the MusicGen model card and AudioCraft’s LICENSE_weights; code is MIT but that does not change the weights’ noncommercial restriction. Research/noncommercial restricted, not OSI-approved open-source weights.
- **Release or activity signal:** The upstream family offers text-only and melody-conditioned variants, documented forms of user conditioning; no wider trend inferred.
- **Sources:** [source 1](https://github.com/facebookresearch/audiocraft) · [source 2](https://github.com/facebookresearch/audiocraft/blob/main/LICENSE_weights) · [source 3](https://huggingface.co/facebook/musicgen-small).

</details>

### Embeddings, reranking, and compact local models

<details>
<summary>Explore the embeddings, reranking, and compact local models entries</summary>

#### Qwen3-Embedding / Qwen3-Reranker

Qwen’s text retrieval family: dense embedding models (0.6B, 4B, 8B) plus separate cross-encoder rerankers in matching sizes. Model-owner materials report 100+ language support, up to 32K context, task instructions, and flexible embedding dimensions.

- **Availability:** Released June 5, 2025; owner repository and model cards provide downloadable weights, inference examples, and distinct embedding/reranking checkpoints. Repository documents Transformers and vLLM integration; availability is not limited to hosted API.
- **Weights / terms:** Apache-2.0 on Qwen3-Embedding model cards (including 0.6B); use each corresponding model card/license file for its weights. The GitHub repository itself does not list a repository license, so do not infer the model-weights license from it.
- **Release or activity signal:** Owner-reported dated release establishes current availability, not adoption trend. Its model card reports the Qwen3 8B embedding checkpoint ranked first on MTEB multilingual as of June 5, 2025; this is a dated benchmark claim, not evidence of market share.
- **Sources:** [source 1](https://huggingface.co/Qwen/Qwen3-Embedding-0.6B) · [source 2](https://huggingface.co/Qwen/Qwen3-Reranker-0.6B) · [source 3](https://github.com/QwenLM/Qwen3-Embedding).

#### BGE-M3 / BGE rerankers

BAAI’s retrieval model family. BGE-M3 unifies dense, sparse lexical-weight, and multi-vector retrieval, supports over 100 languages and up to 8,192 tokens; separate BGE rerankers score retrieved query-document pairs.

- **Availability:** BGE-M3 weights and the FlagEmbedding toolkit are publicly released. The canonical repository includes inference, fine-tuning, and evaluation code; official BGE documentation links to its model collection and repository.
- **Weights / terms:** BGE-M3 model card specifies MIT for weights. The FlagEmbedding GitHub code repository separately specifies MIT; check the individual card/license for other BGE checkpoints rather than assuming all family weights share terms.
- **Release or activity signal:** The canonical repository documents BGE-M3’s January 30, 2024 release and later BGE additions; this evidences continuing project activity, not a quantified adoption trend.
- **Sources:** [source 1](https://huggingface.co/BAAI/bge-m3) · [source 2](https://github.com/FlagOpen/FlagEmbedding) · [source 3](https://www.bge-model.com/).

#### Multilingual E5 (multilingual-e5-large-instruct)

Intfloat’s multilingual sentence-embedding model for retrieval and semantic similarity. The instruct variant uses a natural-language task instruction on the query side, supports 100 languages according to its card, and emits 1,024-dimensional vectors.

- **Availability:** Public model weights and Transformers/Sentence Transformers usage are available. The model card documents local loading and Infinity deployment; input is truncated at 512 tokens per the card.
- **Weights / terms:** MIT license stated on the model card for this checkpoint’s weights.
- **Release or activity signal:** The card reports 1,714,527 downloads last month at verification time, a time-bounded Hugging Face usage indicator (not proof of unique users or overall market share). The model belongs to the E5 line documented in the 2024 technical report.
- **Sources:** [source 1](https://huggingface.co/intfloat/multilingual-e5-large-instruct) · [source 2](https://huggingface.co/intfloat/multilingual-e5-large) · [source 3](https://arxiv.org/abs/2402.05672).

#### Nomic Embed v2 MoE

Nomic’s multilingual sparse mixture-of-experts text embedder, with 475M total and 305M active parameters, 768-dimensional default vectors, Matryoshka dimension reduction, and 512-token maximum sequence length per its card.

- **Availability:** Public model weights and training/evaluation code are linked by the owner; the model card shows Sentence Transformers and Transformers use (including custom-code requirement). It is not an inference-provider-hosted checkpoint in the card’s current status.
- **Weights / terms:** Apache-2.0 specified on the model card for weights. The owner describes weights, code, and evaluation data as released; users loading it through Transformers must enable trust_remote_code per the card.
- **Release or activity signal:** The owner card reports 949,879 downloads last month at verification time, a time-bounded model-hub signal, not market share. Its dated 2025 technical report describes the model’s MoE approach; neither establishes broader category growth.
- **Sources:** [source 1](https://huggingface.co/nomic-ai/nomic-embed-text-v2-moe) · [source 2](https://github.com/nomic-ai/contrastors) · [source 3](https://arxiv.org/abs/2502.07972).

#### Jina embeddings v3 and Jina Reranker v2

A multilingual task-adaptable embedding model with LoRA task modes, 8,192-token input and Matryoshka dimensions, alongside a separate multilingual cross-encoder reranker that scores query-document pairs (up to 1,024 tokens with sliding-window handling).

- **Availability:** Both checkpoints are publicly downloadable; owner cards document local Transformers usage and ONNX or Transformers.js paths. Jina also offers hosted embedding/reranking APIs. Checkpoint-specific commercial rights differ from hosted API availability.
- **Weights / terms:** Both cited model cards state CC-BY-NC-4.0 for the weights; reranker card explicitly limits repository use to research/evaluation and directs commercial users to Jina API/marketplace offerings. This is not OSI-approved open-source licensing.
- **Release or activity signal:** The owner cards document two separately released retrieval products and deployment routes, but provide no substantiated market-growth series; no adoption trend is claimed.
- **Sources:** [source 1](https://huggingface.co/jinaai/jina-embeddings-v3) · [source 2](https://huggingface.co/jinaai/jina-reranker-v2-base-multilingual) · [source 3](https://jina.ai/embeddings).

#### Gemma 3n

Google’s multimodal generative model family optimized for phones, laptops, and tablets. Owner documentation describes E2B/E4B effective-parameter operation, audio/vision/text input, MatFormer nested models, PLE caching, and conditional parameter loading to reduce device resource requirements.

- **Availability:** Released and available through Google’s Kaggle and Hugging Face model collection. Google documents edge execution paths including LiteRT-LM and llama.cpp; its overview explicitly says the models are designed for low-resource devices.
- **Weights / terms:** Open weights, but not OSI-approved open-source: Gemma 3n is governed by Google’s Gemma Terms of Use (commercial use permitted subject to terms and prohibited-use restrictions), not an Apache/MIT license. The separate Gemma 4 Apache-2.0 license does not apply to Gemma 3n.
- **Release or activity signal:** Google’s release documentation establishes a named device-optimized generation and outlines targeted efficiency mechanisms. No independent trend or adoption claim is inferred.
- **Sources:** [source 1](https://ai.google.dev/gemma/docs/gemma-3n) · [source 2](https://ai.google.dev/gemma/terms) · [source 3](https://huggingface.co/collections/google/gemma-3n-685065323f5984ef315c93f4).

#### SmolLM3-3B

Hugging Face’s 3B-parameter instruction-tuned small language model with hybrid reasoning, 6-language support, and up to 128K context using YaRN. It is a text generator, distinct from its separately named embedding and vision models.

- **Availability:** Public model checkpoint and canonical SmolLM project repository are available. The card provides direct Transformers loading and documents local inference; the project repository describes compact models intended to run on-device. Supported serving ecosystems are listed in the model card/project materials.
- **Weights / terms:** Apache-2.0 stated on the SmolLM3 model card for weights; canonical project repository also lists Apache-2.0 for project code. Model card describes the model as fully open with published training details.
- **Release or activity signal:** The canonical SmolLM repository documents SmolLM3 as a newer family release following SmolLM2 and gives the model’s release resources; this establishes development progression, not category-wide growth.
- **Sources:** [source 1](https://huggingface.co/HuggingFaceTB/SmolLM3-3B) · [source 2](https://github.com/huggingface/smollm) · [source 3](https://hf.co/blog/smollm3).

#### Phi-4-mini-instruct

Microsoft’s 3.8B-parameter instruction-following generative model, designed for constrained compute, latency-bound use cases, reasoning, and function calling; model card states 128K context. It is not an embedding model despite the word ‘embedding’ elsewhere in Phi architecture descriptions.

- **Availability:** Released with publicly downloadable Hugging Face weights and documented local Transformers and serving examples. Microsoft describes Phi as deployable locally, at edge, and on-device; exact runtime paths depend on the specific deployment format.
- **Weights / terms:** MIT license specified on the Phi-4-mini-instruct model card. This is a model-weight license claim for this checkpoint, corroborated by Microsoft’s Phi-family page; verify any converted/quantized distribution separately.
- **Release or activity signal:** Microsoft’s current family page identifies Phi-4-mini among the newest Phi models and documents successive Phi versions; that is owner-published release progression, not a quantified trend in usage.
- **Sources:** [source 1](https://huggingface.co/microsoft/Phi-4-mini-instruct) · [source 2](https://azure.microsoft.com/en-us/products/phi) · [source 3](https://github.com/microsoft/PhiCookBook).

</details>

## Scope and update notes

Counts describe the sources inspected for this snapshot, not every agent or model worldwide. The agent matrix is an installer-target inventory; optional skill metadata and runtime behavior remain product-specific. The model groups intentionally focus on selected public/downloadable checkpoints and omit API-only closed models. Model cards, license terms, availability, product names, and install paths can change; use the source links as the current authority. No third-party product is claimed to be tested with these design skills unless that is stated explicitly.
