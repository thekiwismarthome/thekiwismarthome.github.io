---
title: Home Assistant disk growing every day
description: Finding what is filling the disk of a Home Assistant virtual machine, with du.
---

# Home Assistant disk growing every day

*August 2023*

My Home Assistant virtual machine on Proxmox kept running out of space. This is how I found what was filling it.

## Find the big folders

1. In Proxmox, open the virtual machine and start a **noVNC** console.
2. At the prompt, list the size of each top-level folder:

   ```bash
   du -d 1
   ```

3. You get a list of folders and their sizes, like this:

   ![Output of du -d 1 showing the size of each folder](/notes/disk-du.png)

4. Run it again inside the biggest folder to narrow it down.

Ignore `/mnt`. In my case it is the mount for an external NAS, so it is not on the virtual machine's disk.

## Make the output easier to read

`du` reports sizes in kilobytes by default. Add `-h` for human-friendly sizes and sort to put the biggest last:

```bash
du -d 1 -h | sort -h
```

## Where to look next

The usual suspects are the database, the backups folder and the logs. If it is the database, the [Recorder](https://www.home-assistant.io/integrations/recorder/) settings let you keep fewer days of history and leave out noisy entities.
